# Instructions for all frontend developers

# How to start the server:
Open terminal and type: npm start or use node app.js
Requirememts for starting the server: node js,express js,Maria Data Base server
IP Address: 127.0.0.1
Post: 3000

# Plese do the front end work in the respective folder of front end like ambulance, emergency etc..

# API links for frontend development:
# API's work only when the server is started so make sure you start the server when you use the liks of these api

# Responce type (JSON FORMAT):
{
   message: "Contains message about what happened,
   <===Rest of the content===>
}

1) Home page of the site:

 http://127.0.0.1:3000/ => GET/POST/PUT etc..

2) Ambulance service:

1. Ambulance home page:
   http://127.0.0.1:3000/ambulances/home => GET

2. See all the ambulances currently running:
   http://127.0.0.1:3000/ambulances/see =>get

3. See all available ambulances:
http://127.0.0.1:3000/ambulances/see/active => GET

4. Add a ambulance (use it for admin page only):
http://127.0.0.1:3000/ambulances/add => POST send(name,ward_no,address,lat,lon)

5. To search for data about perticular ambulance station:
http://127.0.0.1;3000/ambulances/see/:search => GET (can search on name,ward_no,address send any one insted of :search)

6. Call ambulance:
http://127.0.0.1:3000/ambulances/call POST send(name,contacts,lat,lon of patient)

7. View the present and past bookings of a paricular ambulance station:
http://127.0.0.1/3000/ambulances/stations/see/:name GET (send name of station in place of name)

8. Update the status of the ambulance:
http://127.0.0.1/3000/ambulances/stations/update => PUT send(name,id,status)


