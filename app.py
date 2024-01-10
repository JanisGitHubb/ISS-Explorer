import requests
import time
import csv
import json

# with open('data.csv', mode='w') as csvfile:
#         fieldnames = ['number', 'timestamp', 'longitude', 'latitude']
#         writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
#         writer.writeheader()
#         csvfile.close()

file = open('data.csv', 'a', newline='')
datawriter = csv.writer(file)

# pagaidu skaitītājs, kas palīdz saprast datu plūsmu.
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

    datawriter.writerow([n, timestamp, longitude, latitude])

    with open("data.json", "w") as jsonfile:
        json.dump(jsondata, jsonfile)

    time.sleep(2)
    n = n+1
