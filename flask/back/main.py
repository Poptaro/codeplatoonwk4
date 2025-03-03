from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS




app = Flask("app")
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql+psycopg://rokusho@localhost/school"
db = SQLAlchemy(app)


class Students(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(25))
  last_name = db.Column(db.String(25))
  age = db.Column(db.Integer)
  grade = db.Column(db.String(1))
  teacher_id = db.Column(db.Integer)



class Teachers(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(25))
  last_name = db.Column(db.String(25))
  age = db.Column(db.Integer)
  subject_name = db.Column(db.String(25))




######Get Students and Teachers API#######
@app.route("/students", methods=['GET'])
def students():
  students = [
    {
      'id': stud.id,
      'first_name': stud.first_name,
      'last_name': stud.last_name,
      'age': stud.age,
      'grade': stud.grade,
      'teacher_id': stud.teacher_id
    } for stud in Students.query.all()
  ]
  return jsonify(students)

@app.route("/teachers", methods=['GET'])
def teachers():
  teachers = [
    {
      'id': teach.id,
      'first_name': teach.first_name,
      'last_name': teach.last_name,
      'age': teach.age,
      'subject_name': teach.subject_name
    } for teach in Teachers.query.all()
  ]
  return jsonify(teachers)


@app.route("/student", methods=['POST'])
def add_student():
  data = request.json

  student = Students(
    first_name = data['first_name'],
    last_name = data['last_name'],
    age = data['age'],
    grade = data['grade'],
    teacher_id = data['teacher_id']
  )
  db.session.add(student)
  db.session.commit()
  return 'hi'



app.run(debug=True, port=3001)