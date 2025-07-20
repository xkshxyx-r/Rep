import java.sql.*;
public class MySQLConnect {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/student";
        String user = "root";
        String password = "#Zombie03";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println(" Connected to the database!");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM student_details");
            while (rs.next()) {
                System.out.println("ID : " + rs.getInt(1) +" | Name: " + rs.getString(2) + " | Grade: " + rs.getString(3));
            }
            rs.close();
            stmt.close();
            conn.close();
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
}
