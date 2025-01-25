from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/count', methods=['POST'])
def count_words():
    data = request.get_json()
    text = data.get('text', '')
    word_count = len(text.split()) if text.strip() else 0
    return jsonify({'wordCount': word_count})

if __name__ == '__main__':
    app.run(debug=True)
