Patient Management System
Overview
This project involves building and deploying a comprehensive patient management system using modern web technologies such as Next.js, Twilio, TypeScript, and TailwindCSS. The system includes features like real-time SMS notifications, authentication, registration, appointment scheduling, and an admin panel for managing appointments.

Features
Real-time SMS Notifications: Utilizes Twilio to send SMS notifications to patients about their appointments.
Authentication and Registration: Secure user authentication and registration, allowing patients to fill out personal and medical information.
Appointment Scheduling: Patients can easily schedule appointments with their preferred doctors, with confirmation upon successful booking.
Admin Panel: A comprehensive admin panel for managing appointments, including scheduling, confirmation, and cancellation, with real-time SMS notifications.
Responsive UI: Modern, mobile-responsive user interface built with TailwindCSS.
Technology Stack
Front-end: Next.js, TypeScript, TailwindCSS
Back-end: Node.js, Express
Real-time Notifications: Twilio
Data Management: Appwrite (authentication, database, storage)
Key Components
1. Authentication and Registration
Secure authentication and registration process for patients, allowing them to fill out detailed personal and medical information, including:

General details (name, email, phone number, date of birth, etc.)
Medical information (primary care physician, allergies, current medications, medical history, etc.)
Identification details (type, number, and scanned copy of the document)
2. Appointment Scheduling
Patients can schedule appointments by selecting their preferred doctor, specifying the date, and providing reasons for the appointment. A confirmation screen appears upon successful booking, and patients receive a confirmation SMS.

3. Admin Panel
An admin panel accessible through a secure pass key, providing features such as:

Viewing and managing scheduled, pending, and canceled appointments
Sending confirmation SMS to patients
Canceling appointments with valid reasons
4. Real-time SMS Notifications
Integration with Twilio to send real-time SMS notifications to patients and admins for various events such as appointment confirmations and cancellations.

5. Responsive Design
The application is designed to be fully responsive, ensuring a seamless experience on all devices.

Setup and Installation
Clone the Repository

sh
Copy code
git clone https://github.com/zacharias1219/patient-management-system.git
cd patient-management-system
Install Dependencies

sh
Copy code
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Environment Variables
Create a .env file in both backend and frontend directories and add the following variables:

sh
Copy code
# Backend
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_API_KEY=your_appwrite_api_key
APPWRITE_DATABASE_ID=your_appwrite_database_id
APPWRITE_COLLECTION_ID=your_appwrite_collection_id

# Frontend
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
NEXT_PUBLIC_APPWRITE_API_KEY=your_appwrite_api_key
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
Run the Application

sh
Copy code
# Start Backend
cd backend
npm start

# Start Frontend
cd ../frontend
npm run dev
Usage
Patient: Registers and fills out personal and medical information, schedules appointments, and receives SMS notifications.
Admin: Manages appointments through the admin panel, including scheduling, confirming, and canceling appointments with SMS notifications.
Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

License
This project is licensed under the MIT License. See the LICENSE file for details.
