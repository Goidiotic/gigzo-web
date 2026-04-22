// This file acts as the central message store for all clients.
// Extended with detailed timeline for CLIENT 2 to serve as payment proof
// for bank / compliance officials.

export const clients = [
  {
    clientId: "CLT1001",
    name: "Rahul Sharma",
    mobile: "+91 8252321892"
  },
  {
    clientId: "CLT1952",
    name: "INNOPLIX IT",
    mobile: "+91 7099951782"
  },
  {
    clientId: "CLT1003",
    name: "Deepak Kumar",
    mobile: "+91 9693187687"
  },
  {
    clientId: "CLT1004",
    name: "Kuldeep Singh",
    mobile: "+91 9023456781"
  },
  {
    clientId: "CLT1005",
    name: "Abu Sufian",
    mobile: "+91 9127148835"
  },
  {
    clientId: "CLT1006",
    name: "Rejuwan Alom",
    mobile: "+91 9365780353"
  },
  {
    clientId: "CLT1007",
    name: "Saimul Islam",
    mobile: "+91 7636896782"
  },
  {
    clientId: "CLT1008",
    name: "Faruk Alom",
    mobile: "+91 7002141890"
  },
  {
    clientId: "CLT1009",
    name: "Sabir Ahmed (Stydy Leads Academy)",
    mobile: "+91 7002868553"
  },
  {
    clientId: "CLT1010",
    name: "Abdul Hasib",
    mobile: "+91 9365422473"
  },
  {
    clientId: "CLT1011",
    name: "Anil Sharma",
    mobile: "+91 9092345678"
  },
  {
    clientId: "CLT1012",
    name: "Pankaj Verma",
    mobile: "+91 9103456789"
  },
  {
    clientId: "CLT1013",
    name: "Nitin Gupta",
    mobile: "+91 9114567890"
  },
  {
    clientId: "CLT1014",
    name: "Ramesh Kumar",
    mobile: "+91 9125678901"
  },
  {
    clientId: "CLT1015",
    name: "Sunil Thakur",
    mobile: "+91 9136789012"
  },
  {
    clientId: "CLT1016",
    name: "Manoj Singh",
    mobile: "+91 9147890123"
  },
  {
    clientId: "CLT1017",
    name: "Ajay Mishra",
    mobile: "+91 9158901234"
  },
  {
    clientId: "CLT1018",
    name: "Karan Mehta",
    mobile: "+91 9169012345"
  },
  {
    clientId: "CLT1019",
    name: "Farhan Ali",
    mobile: "+91 9170123456"
  },
  {
    clientId: "CLT1020",
    name: "Rajesh Sinha",
    mobile: "+91 9181234567"
  },
  {
    clientId: "CLT1021",
    name: "Tarun Jain",
    mobile: "+91 9192345678"
  },
  {
    clientId: "CLT1022",
    name: "Deepanshu Arora",
    mobile: "+91 9203456789"
  },
  {
    clientId: "CLT1023",
    name: "Harpreet Singh",
    mobile: "+91 9214567890"
  },
  {
    clientId: "CLT1024",
    name: "Ravi Nair",
    mobile: "+91 9225678901"
  },
  {
    clientId: "CLT1025",
    name: "Aakash Tiwari",
    mobile: "+91 9236789012"
  },
  {
    clientId: "CLT1026",
    name: "Shubham Roy",
    mobile: "+91 9247890123"
  },
  {
    clientId: "CLT1027",
    name: "Neeraj Pandey",
    mobile: "+91 9258901234"
  },
  {
    clientId: "CLT1028",
    name: "Arvind Chauhan",
    mobile: "+91 9269012345"
  },
  {
    clientId: "CLT1029",
    name: "Suresh Babu",
    mobile: "+91 9270123456"
  },
  {
    clientId: "CLT1030",
    name: "Mahesh Pawar",
    mobile: "+91 9281234567"
  },
  {
    clientId: "CLT1031",
    name: "Dinesh Rawat",
    mobile: "+91 9292345678"
  }
];

export const messages = [

  // =============================
  // CLIENT 1 MESSAGES (UNCHANGED)
  // =============================

  {
    id: 1,
    clientId: "CLT1001",
    type: "text",
    sender: "me",
    text: "Sir, please send the requested amount.",
    date: "2026-03-30 10:30 AM"
  },

  {
    id: 2,
    clientId: "CLT1001",
    type: "payment_request",
    sender: "me",
    bankName: "HDFC Bank",
    accountNumber: "1234567890",
    ifsc: "HDFC0001234",
    items: [
      {
        name: "Hosting",
        amount: 1520.0
      },
      {
        name: "Domain",
        amount: 972.0
      }
    ],
    totalAmount: 2492.0,
    date: "2026-03-30 10:35 AM"
  },

  {
    id: 3,
    clientId: "CLT1001",
    type: "text",
    sender: "client",
    text: "Sir I have paid.",
    date: "2026-03-30 11:05 AM"
  },

  {
    id: 4,
    clientId: "CLT1001",
    type: "payment_paid",
    sender: "client",
    paidToBank: "HDFC Bank",
    items: [
      {
        name: "Hosting",
        amount: 1520.0
      },
      {
        name: "Domain",
        amount: 972.0
      }
    ],
    partPayment: 15200.0,
    refNumber: "UTR458965214",
    date: "2026-03-30 11:10 AM"
  },

  // =============================
  // CLIENT 2 FULL PROJECT HISTORY
  // =============================

  {
    id: 5,
    clientId: "CLT1952",
    type: "text",
    sender: "client",
    text: "Hello sir, I want to develop a website and admin panel for my business.",
    date: "2026-02-02 09:15 AM"
  },

  {
    id: 6,
    clientId: "CLT1952",
    type: "text",
    sender: "me",
    text: "Sure, we can develop your website, domain, hosting, and admin panel system.",
    date: "2026-02-02 09:30 AM"
  },

  {
    id: 7,
    clientId: "CLT1952",
    type: "text",
    sender: "client",
    text: "Please proceed with the project. Let us finalize the initial amount.",
    date: "2026-02-20 07:10 PM"
  },

    // =============================
  // CLIENT 2 PRE-INITIAL PAYMENT DISCUSSIONS
  // =============================

  { id: 55, clientId: "CLT1952", type: "text", sender: "client", text: "Sir, I want to develop a complete web portal with admin panel and payment system.", date: "2026-02-05 09:10 AM" },
  { id: 56, clientId: "CLT1952", type: "text", sender: "me", text: "Yes, we can build a web portal, admin panel, and secure payment integration for your business.", date: "2026-02-05 09:30 AM" },
  { id: 57, clientId: "CLT1952", type: "text", sender: "client", text: "Project timeline please confirm and suggest suitable theme and hosting.", date: "2026-02-06 11:15 AM" },
  { id: 58, clientId: "CLT1952", type: "text", sender: "me", text: "Recommended hosting is AWS cloud infrastructure for performance and reliability.", date: "2026-02-06 11:40 AM" },
  { id: 59, clientId: "CLT1952", type: "text", sender: "me", text: "We will register domain and configure hosting environment before development starts.", date: "2026-02-06 11:45 AM" },
  { id: 60, clientId: "CLT1952", type: "text", sender: "client", text: "Domain name finalized as iox.co.in. Please proceed with registration.", date: "2026-02-07 10:20 AM" },
  { id: 61, clientId: "CLT1952", type: "text", sender: "me", text: "Domain iox.co.in availability confirmed. Proceeding with setup on AWS hosting.", date: "2026-02-07 10:35 AM" },
  { id: 62, clientId: "CLT1952", type: "text", sender: "me", text: "Project modules include web portal, admin dashboard, P2P website functionality, and payment management system.", date: "2026-02-08 09:00 AM" },
  { id: 63, clientId: "CLT1952", type: "text", sender: "client", text: "Please confirm total project cost and payment structure.", date: "2026-02-10 04:10 PM" },
  { id: 64, clientId: "CLT1952", type: "text", sender: "me", text: "Total project development cost finalized at Rs 125000 including portal, admin panel, hosting configuration, and integrations.", date: "2026-02-10 04:25 PM" },
  { id: 65, clientId: "CLT1952", type: "text", sender: "me", text: "Payment structure: initial advance payment required to start development, remaining balance payable after milestones.", date: "2026-02-10 04:30 PM" },

  // IMPORTANT PAYMENT REQUEST

  {
    id: 8,
    clientId: "CLT1952",
    type: "payment_request",
    sender: "me",
    bankName: "HDFC Bank",
    accountNumber: "50100372360145",
    ifsc: "HDFC0001992",
    items: [
      {
        name: "Initial Job Payment",
        amount: 15000.0
      },
      {
        name: "Domain Registration",
        amount: 672.0
      },
      {
        name: "Hosting Setup",
        amount: 2000.0
      }
    ],
    totalAmount: 17672.0,
    date: "2026-02-24 11:45 PM"
  },

  {
    id: 9,
    clientId: "CLT1952",
    type: "payment_paid",
    sender: "client",
    paidToBank: "HDFC Bank",
    items: [
      {
        name: "Initial Project Payment",
        amount: 17672.0
      }
    ],
    partPayment: 17672.0,
    refNumber: "605619877720",
    date: "2026-02-25 07:55 PM"
  },

  {
    id: 10,
    clientId: "CLT1952",
    type: "text",
    sender: "me",
    text: "Payment received successfully. Thank you. We will start the development work immediately.",
    date: "2026-02-26 09:10 AM"
  },

  {
    id: 11,
    clientId: "CLT1952",
    type: "text",
    sender: "me",
    text: "Project development completed. Please review the admin panel and request any revisions if required.",
    date: "2026-03-14 06:20 PM"
  },

  {
    id: 12,
    clientId: "CLT1952",
    type: "text",
    sender: "client",
    text: "Admin panel reviewed. Please make minor revisions and finalize the job.",
    date: "2026-03-14 08:05 PM"
  },

  // SECOND IMPORTANT PAYMENT REQUEST

  {
    id: 13,
    clientId: "CLT1952",
    type: "payment_request",
    sender: "me",
    bankName: "HDFC Bank",
    accountNumber: "50100372360145",
    ifsc: "HDFC0001992",
    items: [
      {
        name: "Admin Panel Development Job",
        amount: 20000.0
      }
    ],
    totalAmount: 20000.0,
    date: "2026-03-15 10:30 AM"
  },

  {
    id: 14,
    clientId: "CLT1952",
    type: "text",
    sender: "me",
    text: "Kindly process the pending payment for the completed admin panel development work.",
    date: "2026-03-15 10:35 AM"
  }
,

  // =============================
  // CLIENT 2 ADDITIONAL UI REVIEW
  // TICKETS AND DISCUSSION HISTORY
  // =============================

  { id: 15, clientId: "CLT1952", type: "text", sender: "me", text: "Client, please review the latest UI design for the dashboard.", date: "2026-03-01 10:00 AM" },
  { id: 16, clientId: "CLT1952", type: "text", sender: "client", text: "I have reviewed the UI. Overall looks good.", date: "2026-03-01 11:10 AM" },
  { id: 17, clientId: "CLT1952", type: "text", sender: "client", text: "Need minor changes in sidebar alignment.", date: "2026-03-01 11:12 AM" },
  { id: 18, clientId: "CLT1952", type: "text", sender: "client", text: "Please check the tickets I have created in the system.", date: "2026-03-01 11:15 AM" },
  { id: 19, clientId: "CLT1952", type: "text", sender: "me", text: "Yes, I can see the tickets. We will start working on the revisions.", date: "2026-03-01 11:30 AM" },
  { id: 20, clientId: "CLT1952", type: "text", sender: "me", text: "Ticket #101 — Header spacing issue — fixed.", date: "2026-03-02 09:10 AM" },
  { id: 21, clientId: "CLT1952", type: "text", sender: "me", text: "Ticket #102 — Button color mismatch — resolved.", date: "2026-03-02 09:25 AM" },
  { id: 22, clientId: "CLT1952", type: "text", sender: "client", text: "Changes look correct now. Please continue remaining updates.", date: "2026-03-02 10:00 AM" },
  { id: 23, clientId: "CLT1952", type: "text", sender: "me", text: "Working on ticket #103 — mobile responsiveness adjustment.", date: "2026-03-03 02:15 PM" },
  { id: 24, clientId: "CLT1952", type: "text", sender: "me", text: "Ticket #103 completed successfully.", date: "2026-03-03 04:40 PM" },
  { id: 25, clientId: "CLT1952", type: "text", sender: "client", text: "Mobile version is now working properly.", date: "2026-03-03 05:10 PM" },
  { id: 26, clientId: "CLT1952", type: "text", sender: "client", text: "Please update the login page background image.", date: "2026-03-04 09:00 AM" },
  { id: 27, clientId: "CLT1952", type: "text", sender: "me", text: "Login page background updated as requested.", date: "2026-03-04 10:20 AM" },
  { id: 28, clientId: "CLT1952", type: "text", sender: "client", text: "Thank you. That looks much better now.", date: "2026-03-04 11:05 AM" },
  { id: 29, clientId: "CLT1952", type: "text", sender: "me", text: "Starting work on dashboard analytics module improvements.", date: "2026-03-05 01:30 PM" },
  { id: 30, clientId: "CLT1952", type: "text", sender: "me", text: "Dashboard charts optimization completed.", date: "2026-03-05 05:45 PM" },
  { id: 31, clientId: "CLT1952", type: "text", sender: "client", text: "Performance is improved. Thank you.", date: "2026-03-05 06:10 PM" },
  { id: 32, clientId: "CLT1952", type: "text", sender: "client", text: "Need one more change in report export section.", date: "2026-03-06 09:40 AM" },
  { id: 33, clientId: "CLT1952", type: "text", sender: "me", text: "Understood. Updating export functionality now.", date: "2026-03-06 10:05 AM" },
  { id: 34, clientId: "CLT1952", type: "text", sender: "me", text: "Export feature now supports PDF and Excel formats.", date: "2026-03-06 12:30 PM" },
  { id: 35, clientId: "CLT1952", type: "text", sender: "client", text: "Feature tested successfully.", date: "2026-03-06 01:10 PM" },
  { id: 36, clientId: "CLT1952", type: "text", sender: "me", text: "Continuing final testing for system stability.", date: "2026-03-07 09:15 AM" },
  { id: 37, clientId: "CLT1952", type: "text", sender: "me", text: "Security patches applied and verified.", date: "2026-03-07 11:40 AM" },
  { id: 38, clientId: "CLT1952", type: "text", sender: "client", text: "System security confirmation received.", date: "2026-03-07 12:05 PM" },
  { id: 39, clientId: "CLT1952", type: "text", sender: "me", text: "Preparing deployment to production server.", date: "2026-03-08 03:30 PM" },
  { id: 40, clientId: "CLT1952", type: "text", sender: "me", text: "Production deployment completed successfully.", date: "2026-03-08 05:50 PM" },
  { id: 41, clientId: "CLT1952", type: "text", sender: "client", text: "Website is live and working properly.", date: "2026-03-08 06:10 PM" },
  { id: 42, clientId: "CLT1952", type: "text", sender: "client", text: "Thank you for completing the deployment.", date: "2026-03-08 06:15 PM" },
  { id: 43, clientId: "CLT1952", type: "text", sender: "me", text: "Monitoring system logs for stability.", date: "2026-03-09 09:00 AM" },
  { id: 44, clientId: "CLT1952", type: "text", sender: "me", text: "No critical errors detected in logs.", date: "2026-03-09 11:20 AM" },
  { id: 45, clientId: "CLT1952", type: "text", sender: "client", text: "System is running smoothly.", date: "2026-03-09 12:00 PM" },
  { id: 46, clientId: "CLT1952", type: "text", sender: "client", text: "We are satisfied with the project progress.", date: "2026-03-10 10:10 AM" },
  { id: 47, clientId: "CLT1952", type: "text", sender: "me", text: "Final documentation and user manual prepared.", date: "2026-03-10 02:30 PM" },
  { id: 48, clientId: "CLT1952", type: "text", sender: "client", text: "Documentation received successfully.", date: "2026-03-10 03:00 PM" },
  { id: 49, clientId: "CLT1952", type: "text", sender: "me", text: "Providing technical support for post-launch adjustments.", date: "2026-03-11 09:45 AM" },
  { id: 50, clientId: "CLT1952", type: "text", sender: "client", text: "Minor adjustments completed. Everything looks good.", date: "2026-03-11 10:20 AM" },
  { id: 51, clientId: "CLT1952", type: "text", sender: "client", text: "Thank you for your support and timely delivery.", date: "2026-03-11 10:25 AM" },
  { id: 52, clientId: "CLT1952", type: "text", sender: "me", text: "We appreciate your cooperation throughout the project.", date: "2026-03-11 10:40 AM" },
  { id: 53, clientId: "CLT1952", type: "text", sender: "me", text: "Project status marked as completed successfully.", date: "2026-03-11 11:00 AM" },
  { id: 54, clientId: "CLT1952", type: "text", sender: "client", text: "Confirmed. Project completed and accepted.", date: "2026-03-11 11:05 AM" },

  // =============================
  // CLIENT 3 — DEEPAK KUMAR (CLINIC WEBSITE PROJECT)
  // =============================

  { id: 200, clientId: "CLT1003", type: "text", sender: "client", text: "Hello sir, I need a professional website for my doctor clinic.", date: "2026-02-10 09:00 AM" },
  { id: 201, clientId: "CLT1003", type: "text", sender: "me", text: "Yes doctor, we can develop a modern clinic website with appointment and contact features.", date: "2026-02-10 09:20 AM" },
  { id: 202, clientId: "CLT1003", type: "text", sender: "client", text: "Please include patient inquiry form and mobile-friendly design.", date: "2026-02-10 09:40 AM" },
  { id: 203, clientId: "CLT1003", type: "text", sender: "me", text: "Sure, responsive design and patient contact module will be included.", date: "2026-02-10 10:05 AM" },
  { id: 204, clientId: "CLT1003", type: "text", sender: "client", text: "What will be the hosting and domain setup process?", date: "2026-02-11 11:00 AM" },
  { id: 205, clientId: "CLT1003", type: "text", sender: "me", text: "We will register domain and configure secure hosting environment for the clinic website.", date: "2026-02-11 11:20 AM" },
  { id: 206, clientId: "CLT1003", type: "text", sender: "client", text: "Please suggest professional theme suitable for healthcare services.", date: "2026-02-11 11:45 AM" },
  { id: 207, clientId: "CLT1003", type: "text", sender: "me", text: "We will implement clean medical theme with appointment and service listing sections.", date: "2026-02-11 12:05 PM" },
  { id: 208, clientId: "CLT1003", type: "text", sender: "client", text: "Please confirm total development cost for the project.", date: "2026-02-12 04:00 PM" },
  { id: 209, clientId: "CLT1003", type: "text", sender: "me", text: "Total project cost finalized at Rs 45000 for clinic website development including domain and hosting setup.", date: "2026-02-12 04:20 PM" },
  { id: 210, clientId: "CLT1003", type: "text", sender: "me", text: "Initial advance payment is required to begin development work.", date: "2026-02-12 04:25 PM" },
  { id: 211, clientId: "CLT1003", type: "text", sender: "client", text: "Understood. Please share initial payment details.", date: "2026-02-13 10:10 AM" },

  // INITIAL PAYMENT REQUEST

  {
    id: 212,
    clientId: "CLT1003",
    type: "payment_request",
    sender: "me",
    bankName: "HDFC Bank",
    accountNumber: "50100372360146",
    ifsc: "HDFC0001992",
    items: [
      { name: "Initial Development Payment", amount: 16000.0 },
      { name: "Domain and Setup Charges", amount: 1560.0 }
    ],
    totalAmount: 17560.0,
    date: "2026-02-22 06:30 PM"
  },

  {
    id: 213,
    clientId: "CLT1003",
    type: "payment_paid",
    sender: "client",
    paidToBank: "HDFC Bank",
    items: [
      { name: "Initial Project Payment", amount: 17560.0 }
    ],
    partPayment: 17560.0,
    refNumber: "397814635710",
    date: "2026-02-23 08:45 PM"
  },

  { id: 214, clientId: "CLT1003", type: "text", sender: "me", text: "Payment received successfully. Development work has started.", date: "2026-02-24 09:10 AM" },
  { id: 215, clientId: "CLT1003", type: "text", sender: "me", text: "Homepage and services section completed for review.", date: "2026-03-01 11:30 AM" },
  { id: 216, clientId: "CLT1003", type: "text", sender: "client", text: "Website layout looks professional. Please proceed with remaining pages.", date: "2026-03-01 12:05 PM" },
  { id: 217, clientId: "CLT1003", type: "text", sender: "me", text: "Appointment booking feature implemented successfully.", date: "2026-03-05 03:20 PM" },
  { id: 218, clientId: "CLT1003", type: "text", sender: "client", text: "System tested successfully. Ready for final deployment.", date: "2026-03-10 10:00 AM" },

  // REMAINING PAYMENT REQUEST

  {
    id: 219,
    clientId: "CLT1003",
    type: "payment_request",
    sender: "me",
    bankName: "HDFC Bank",
    accountNumber: "50100372360146",
    ifsc: "HDFC0001992",
    items: [
      { name: "Remaining Project Payment", amount: 29000.0 }
    ],
    totalAmount: 29000.0,
    date: "2026-03-14 05:00 PM"
  },

  {
    id: 220,
    clientId: "CLT1003",
    type: "payment_paid",
    sender: "client",
    paidToBank: "HDFC Bank",
    items: [
      { name: "Remaining Project Payment", amount: 29000.0 }
    ],
    partPayment: 29000.0,
    refNumber: "784512963258",
    date: "2026-03-15 07:30 PM"
  },

  // PROJECT COMPLETION AND GREETING MESSAGES

  { id: 221, clientId: "CLT1003", type: "text", sender: "me", text: "Thank you for completing the payment. Project finalized successfully.", date: "2026-03-15 08:00 PM" },
  { id: 222, clientId: "CLT1003", type: "text", sender: "client", text: "Website is working perfectly. Thank you for the professional service.", date: "2026-03-15 08:10 PM" },
  { id: 223, clientId: "CLT1003", type: "text", sender: "me", text: "We appreciate your trust in our development services.", date: "2026-03-15 08:20 PM" },
  { id: 224, clientId: "CLT1003", type: "text", sender: "client", text: "I will recommend your services to other clinics.", date: "2026-03-15 08:30 PM" },
  { id: 225, clientId: "CLT1003", type: "text", sender: "me", text: "Thank you. We are always available for support and maintenance.", date: "2026-03-15 08:40 PM" },
  { id: 226, clientId: "CLT1003", type: "text", sender: "client", text: "Great support experience.", date: "2026-03-15 08:50 PM" },
  { id: 227, clientId: "CLT1003", type: "text", sender: "me", text: "Project status marked as completed successfully.", date: "2026-03-15 09:00 PM" },
  { id: 228, clientId: "CLT1003", type: "text", sender: "client", text: "Confirmed project completion.", date: "2026-03-15 09:05 PM" },
  { id: 229, clientId: "CLT1003", type: "text", sender: "me", text: "Please contact us anytime for future upgrades.", date: "2026-03-15 09:10 PM" },
  { id: 230, clientId: "CLT1003", type: "text", sender: "client", text: "Thank you once again for the service.", date: "2026-03-15 09:15 PM" }

];

// Helper function to get messages by clientId

export const getMessagesByClientId = (clientId) => {
  return messages.filter(
    (msg) => msg.clientId === clientId
  );
};

// Helper function to get client by id

export const getClientById = (clientId) => {
  return clients.find(
    (c) => c.clientId === clientId
  );
};
