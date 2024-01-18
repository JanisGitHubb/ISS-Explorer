import requests
import time
import json

n = 1
for i in range(5):
    response = requests.get('http://api.open-notify.org/iss-now.json')
    jsondata = response.json()

    status = response.status_code
    message = response.json()['message']
    timestamp = response.json()['timestamp']
    longitude = response.json()['iss_position']['longitude']
    latitude = response.json()['iss_position']['latitude']

    print(status)
    print(message)
    print(timestamp)
    print(longitude)
    print(latitude)
    print("----------")
    print(response.json())

    with open('dot.json', 'r') as f:
        data = json.load(f)

    for item in data['Dots']:
        if 'lat' in item and 'lng' in item:
            item['lat'] = latitude  
            item['lng'] = longitude
        else:
            print("neiet večuk")

    
    with open('dot.json', 'w') as f:
        json.dump(data, f, indent=4)


    time.sleep(2)
    n = n+1