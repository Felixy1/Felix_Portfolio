from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = [
        {"name": "Project 1", "description": "Description of project 1"},
        {"name": "Project 2", "description": "Description of project 2"},
    ]
    return jsonify(projects)

@app.route('/api/resume', methods=['GET'])
def get_resume():
    resume = "Resume content here"
    return jsonify({"resume": resume})

if __name__ == '__main__':
    app.run(debug=True)