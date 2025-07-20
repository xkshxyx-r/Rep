import mysql.connector

# Establish connection
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="#Zombie03",  # Add your MySQL password here if set
    database="student"
)

# Create a cursor to execute queries
cursor = connection.cursor()

# Execute a simple SELECT query
cursor.execute("SELECT * FROM student_details")

# Fetch all rows
rows = cursor.fetchall()

# Print results
for row in rows:
    print("ID:", row[0], "| Name:", row[1], "| Grade:", row[2])

# Clean up
cursor.close()
connection.close()
