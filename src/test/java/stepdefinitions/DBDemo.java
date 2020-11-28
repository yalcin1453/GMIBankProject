package stepdefinitions;

import com.google.gson.internal.bind.util.ISO8601Utils;
import org.junit.Test;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DBDemo {
    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;
    private static ResultSetMetaData rsmd;
    /*  Creates connection before query execution .
     * gets parameter already up in the fields inm this class
     */
    public static Connection createConnection() {
        String url = "jdbc:postgresql://157.230.48.97:5432/gmibank_db";
        String user = "techprodb_user";
        String password = "Techpro_@126";
        try {
            DriverManager.registerDriver(new org.postgresql.Driver());
            connection = DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return connection;
    }
    /*
     * executes a query and outputs a Resultset
     */
    public static ResultSet executeQuery(String query){
        createConnection();
        try {
            statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            resultSet = statement.executeQuery(query);
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println("\""+query+"\" query did not successfully execute!");
        }
        return resultSet;
    }
    @Test
    public void demo() throws SQLException {
//        List<Map<String,String>> list=utilities.DBDemo.getQueryAsAListOfMaps("SELECT * FROM public.jhi_user");
//        list.stream().
//                map(t->"last_name: "+t.get("last_name")).
//                map(t->t).
//                forEach(System.out::println);
        //========================

//        List<Map<String,String>> list=utilities.DBDemo.getQueryAsAListOfMaps("SELECT * FROM public.jhi_user WHERE login LIKE '%user%' ");
//        list.stream().
//                map(t->t.get("login")).
//                map(t->t).
//                forEach(System.out::println);
        //======================
        List<Map<String,String>> list=utilities.DBDemo.getQueryAsAListOfMaps("SELECT * FROM public.jhi_user WHERE login='team12admin22' ");
        list.stream().
              map(t->t.get("login")).
                map(t->t).
                forEach(System.out::println);
        System.out.println(list.size());
    }
}
