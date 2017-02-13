from flask import Flask, Response, request, send_from_directory
import simplejson as json
import glob


app = Flask(__name__)


@app.route('/data/event/<int:event_id>', methods=['GET', 'POST'])
def handle_event(event_id):
    if request.method == 'GET':
        with open('app/data/event/%d.json' % event_id, 'r') as f:
            return Response(f.read(), mimetype='application/json')
    elif request.json is not None:
        jsondata = json.dumps(request.json)
        with open('app/data/event/%d.json' % event_id, 'w') as f:
            f.write(jsondata)
        return Response(jsondata, mimetype='application/json')


@app.route('/data/event/', methods=['GET'])
def get_all_events():
    events = []
    for eventfile in glob.glob('app/data/event/*.json'):
        with open(eventfile, 'r') as f:
            eventdata = json.load(f)
            events.append(eventdata)
    return Response(json.dumps(events), mimetype='application/json')


@app.route('/')
def send_index():
    return send_from_directory('app', 'index.html')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('app/js', path)


@app.route('/lib/<path:path>')
def send_jslib(path):
    return send_from_directory('app/lib', path)


@app.route('/<path:path>.html')
def send_html(path):
    return send_from_directory('app', '%s.html' % path)


@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('app/css', path)


@app.route('/img/<path:path>')
def send_img(path):
    return send_from_directory('app/img', path)


@app.route('/favicon.ico')
def send_favicon():
    return send_from_directory('app', 'favicon.ico')


if __name__ == '__main__':
    app.run()
