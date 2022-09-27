document.body.classList.add("font-sans");
const newQuestionArray = [
  [
    {
      question:
        "Q. Do I need to have a laptop or desktop to complete the program or can I do it on mobile too?",
      answer:
        "You can use a mobile to learn from study materials and class lectures but you need to have a laptop to complete the projects that are mandatory in this program. You can use friends and family laptops if you don’t have any.",
    },
    {
      question:
        " Q. Are there any prerequisites on the background/ degree/ technical skills like coding?",
      answer:
        "The best thing about this program is that there are no prerequisites, this program is built to teach you from scratch. People from all backgrounds (B.tech/BCA/B.Com/BBA/ B.Sc/MBA/Commerce/Pharma etc.) are welcomed to apply. Note: No prior coding/ technical skills required.",
    },
  ],
  [
    {
      question: " Q. I'm not able to make payment. What should you do now?",
      answer:
        "You could try making the payment from a different UPI/ Paytm/ Credit/ Debit cards/ Net Banking/ Mobile Banking (of a friend or family). If you still face issues, mail us at support@trainity.in, we will reserve a seat for you and you can make payments within 2 days.",
    },
    {
      question:
        "Q. What are the different options available to pay the program fee?",
      answer:
        "You can make payments on Trainity using the following payment methods: UPI/ Paytm/ Credit/Debit cards/ Net Banking/ Mobile Banking",
    },
    {
      question: "Q. My payment got deducted twice. What should I do now?",
      answer:
        "You can mail us with your contact details, email address and payment screenshot. We will process the refund within 24 hrs.",
    },
    {
      question:
        "Q. I can not pay the entire fee in one go and would like to pay it in installments. What should I do?",
      answer:
        "You can mail us at support@trainity.in for installment payment, we will provide you all details there about the part payment you have to make. ",
    },
    {
      question: "Q. Will there be any other fee? Are there any hidden charges?",
      answer:
        "No, there will be no other fee at any point during the program other than the enrollment fee. We do not charge anything even after your placement. You don’t have to worry about the hidden charges as we only ask for enrolment fee and that is also fully refundable after you complete this program within a deadline..",
    },
    {
      question: "Q. What is the ₹0 Effective Fee, how does it work? ",
      answer:
        "Trainity requires Commitment Bond Fee to be paid to enroll in the program. This means that you pay a commitment bond of enrollment fee, and if you complete all projects in the experience, you will get a full refund at the end of the program. We have a 100% refund approval rate, which means 100% of our students who complete the program get their entire fee back",
    },
    {
      question:
        "Q. What is the guarantee of refund? What if my projects are rejected?",
      answer:
        "The projects are not pass/fail, that is if you attempt all projects without copying someone else's work and no blank submission, your projects will be approved and you will pass the training.",
    },
    {
      question: "Q. I paid, but was unable to log in. ",
      answer:
        "Trainity provides you to sign up in our portal using either your contact number or your mail id. Please ensure that you are providing the correct login credentials while logging in to our portal via the following link:https://trainity.space/ If the issue still persists, kindly mail us at support@trainity.in regarding the same and also mention your details such as email id, contact number, and payment screenshot.",
    },
    {
      question: " Q. How do I know my eligibility for refund? ",
      answer:
        "You are eligible for getting a refund once you have completed the following tasks within a deadline: 1. Submit your projects and get them approved. 2. Complete the task section on the Trainity dashboard. In this section, you need to fill in your basic information and feedback. 3. Attend all of the career coaching sessions",
    },
    {
      question: " Q. What If I pay now and do not get a seat? ",
      answer:
        "The seats are allotted on a first come first serve basis. If you pay, you will get a seat. If we are unable to provide you a seat, you will get a full refund of the enrolment fee in your original payment method within 2 hrs. If you have any queries regarding the number of seats left you can always mail us at support@trainity.in to know seats availability.",
    },
  ],
  [
    {
      question:
        "Q. Once I am done with enrollment payment , when will the program start? Can I reschedule my program start date? ",

      answer:
        "You can start your program a day after making payment, you can also change the start date by mailing us at support@trainity.in. ",
    },
    {
      question:
        "Q. What will be the timing of the online classes? How many hours a day do I need to spend on the program to complete it in the given duration? ",

      answer:
        " The videos are pre-recorded so you can watch them any time of the day as convenient to you. The training program also consists of 9 industry relevant projects that you will undergo as you learn.The timings are flexible and you would be required to put 1-1.5 hrs/day as per your own schedule. Even if you have other commitments, you can simply decide to put more time on holidays/weekends to complete your tasks & projects. ",
    },
    {
      question: "Q. What is the duration of the program? ",

      answer:
        " First 12 weeks (8 + 4 buffer) will be your training period where you will develop skills and get work-ex while working on industry relevant projects. There will be 4 weeks of career coaching sessions where you will be mentored by a top notch career coach with an experience of over 7+ years. After 16 weeks you are eligible for a guaranteed internship that is optional for working professionals.   ",
    },
    {
      question:
        "Q. What if I am not able to complete the entire program in the given duration? Will I get an extension? ",

      answer:
        "Unlike other companies, we don’t charge anything to get an extension. It’s just that you will not be eligible for a refund if you don’t complete it within the given duration. ",
    },
  ],
  [
    {
      question:
        " Q. How many total modules and total projects are there in the data analytics course? ",
      answer:
        "Trainity will provide you the learning material in form of recorded videos, handbooks, case studies, assignments, projects & daily tasks would be available on your dashboard There are a total 9 projects and 7 modules in total whose screenshot is attached below. ",
    },
    {
      question:
        "Q. What will be the timing of the online classes? How many hours a day do I need to spend on the program to complete it in the given duration? ",

      answer:
        " The videos are pre-recorded so you can watch them any time of the day as convenient to you. The training program also consists of 9 industry relevant projects that you will undergo as you learn.The timings are flexible and you would be required to put 1-1.5 hrs/day as per your own schedule. Even if you have other commitments, you can simply decide to put more time on holidays/weekends to complete your tasks & projects. ",
    },
    {
      question:
        "Q. What if I get stuck somewhere while learning/ project implementation? How will my doubts be solved? ",

      answer:
        " You will have 24*7 access to a doubt clearing mail support (support@trainity.in) where you can post your doubts and one of the team members would answer them with-in 24 hours. ",
    },
    {
      question:
        "Q. How many projects will be there in the program? Do I need to submit all of them? On what parameters would my projects be evaluated? ",
      answer:
        " There will be a total 9 industry relevant projects in our program and you need to submit all of them. The projects are not pass/fail, that is if you attempt all projects without copying someone else's work and no blank submission, your projects will be approved and you will pass the training. Certifications ",
    },
  ],
  [
    {
      question:
        "Q. What certificate will I receive from Trainity upon completing the program? ",
      answer:
        "You will get a Mini Certificate after completing the first two projects then you will get a Training Certificate after completing 6 projects. When you complete all 9 projects, you will get a Virtual Internship Certificate from Trainity. ",
    },
    {
      question:
        "Q. What is the criteria for one to receive the certificate upon completion?",
      answer:
        " The necessary requirements to be eligible for the certificate are as follows -Submission of the mandatory projects Complete the task section on the Trainity dashboard Attending the career coaching sessions",
    },
  ],
  [
    {
      question:
        "Q. Will I get a guaranteed Internship? What will be the stipend? ",

      answer:
        "Yes, you will get a guaranteed paid internship of 4 weeks post completion of your training of 12 weeks. The minimum stipend will be ₹2,000/month. The median stipend is ₹5,000/month while the maximum stipend is ₹10,000/month. Also, you will get a guaranteed Virtual Internship certificate after which is valid to be used for colleges/linkedin/resume or as work experience while applying for a job. Internship is completely optional from your end.",
    },
    {
      question:
        "Q. How will an Internship help me in getting a job or career transition? ",

      answer:
        " Going via Intern —→ Full time role is often easier than directly applying for full time roles. Therefore, we will help you get a paid internship @top partner company which you can convert into a full time role by performing well  We get a 95% placement rate for Intern —→ Full Time Offer. That is, 95/100 students who get an internship after the program convert their Internship into a full time role.",
    },
    {
      question: "Q. What is the benefit of Interning for 4 Weeks?",

      answer:
        " Internships have proved to boost placement and job opportunities for any candidate by 5-7x. Students who have internship experience are easily noticed by recruiters and are always given preference for interviews. However, getting an internship experience is extremely hard if you follow the standard route of applying via portals like internshala/linkedin, your chances of getting an internship is less than 5% . This is the same reason, the majority of students have blank and empty resumes by the time they reach their final year and sit for placements and are unable to get campus placements while students having experience are the ones who get placed at campus placements. Here, we step in to provide you with valid and official Internship experience so you can break out of no experience no job cycle.",
    },
  ],
];
let questionArray = [
  {
    question: "Q. Who is eligible to apply for this program?",
    answer:
      "The program is eligible for College Students (1st/2nd/3rd/4th year), Recent Graduates (Gaps), Working Professionals (from any field). The program will help:  1. College Students (1st Year to Final Year): Land paid guaranteed internships with stipend upto ₹5,000 2. Recent Graduates (2014-2021): Land a full time job with CTC > 6LPA after completing internship 3. Working Professionals (IT/Non-IT): Transition to Data analytics domain with upto 2x salary hike",
  },

  {
    question:
      "Q. I am in the early years of college and will NOT be graduating in the next 12 months, can I still apply?",
    answer:
      "Yes, if you have decided to make a career in data analytics and are ready to put in the required time and effort to complete the program, you can still apply and get the program for an effective ₹0 fee. You can get a  paid guaranteed internship with stipend upto ₹5,000 after program completion.",
  },
  {
    question:
      "Q. I have more than 3 years of work experience in a different field and now I want to switch to Data Analytics, can I apply?",
    answer:
      "Yes, Working professionals looking to change their field into data analytics or upskill can also enroll.  The internship will be optional for working professionals and timings are flexible for the entire program. Our previous Trainity graduates were from backgrounds like sales, customer support, operations and have successfully moved to the analytics domain after completing the program.The program will help them in the following ways: 1. Upskilling in Data Analytics domain 2. Building real world project on Data Analytics sourced from real companies 3. Beef-up their resume & LinkedIn with experience relevant to data domain",
  },
  {
    question: "Q. I want to know more about the course.",
    answer:
      "Trainity provides live projects & online guaranteed internships with top startups to help students learn through practical and industrial experience and help them get their dream job in 16 weeks. The first 8+4 weeks of your training would be self-paced where all the learning material in form of recorded videos, handbooks, case studies, & projects would be available on your dashboard.The last four weeks will be mentored by our career coach with an experience of over 7 years in the career coaching domain. We also assist you in building your Resume, Linkedin profile, Value Document and how to contact HR's under the guidance of our mentors You will have access to curated content in the form of a written manual or in the form of recorded videos, which has all the necessary information you would need. We conduct live demo sessions for attending them you need to register with us. The information regarding course fees and payment are provided in the session which has to be paid before you start the training.For more information, you can visit our website -  https://www.trainity.in/ ",
  },
  {
    question: "Q. On what parameters would my projects be evaluated?",
    answer:
      "You are required to complete 9 projects in this course. All these 9 projects have different levels of difficulty ranging from easy to moderate level. The projects are not pass/fail, that is if you attempt all projects without copying someone else's work and no blank submission, your projects will be approved and you will pass the training. On the basis of your project's quality you will get a score that you can see on the trainity dashboard.",
  },
];

let sectionArray = [
  { id: 0, title: "Eligibility & Application" },
  { id: 0, title: "Program Requisites" },
  { id: 1, title: "Payment & Refund" },
  { id: 2, title: "Start date & duration" },
  { id: 3, title: "Program delivery" },
  { id: 4, title: "Certifications" },
  { id: 5, title: "Guaranteed Internship Program" },
];

const sectionContainer = document.getElementById("sections");
for (let index = 0; index < sectionArray.length; index++) {
  const newSectionElement = document.createElement("section");
  newSectionElement.classList.add(
    "cursor-pointer",
    "font-bold",
    "text-sm",
    "overflow-hidden",
    "min-width-max",
    "truncate",
    `section-elem-${index}`
  );
  newSectionElement.setAttribute("id", sectionArray[index].id);
  const newSectionTextElement = document.createTextNode(
    sectionArray[index].title
  );
  newSectionElement.appendChild(newSectionTextElement);
  sectionContainer.appendChild(newSectionElement);
}

const questionContainer = document.getElementById("Question-container");

function displayQuestion(questionArr) {
  for (let index = 0; index < questionArr.length; index++) {
    const newQuestionElement = document.createElement("div");
    newQuestionElement.classList.add(
      "questions",
      "py-5",
      "border-b",
      "hover:bg-slate-50",
      "flex",
      "tesxt-sm",
      "flex-col",
      "space-y-2",
      "cursor-pointer",
      `q${index}`
    );
    const questionParaElement = document.createElement("p");
    const newQuestionText = document.createTextNode(
      questionArr[index].question
    );
    questionParaElement.appendChild(newQuestionText);
    newQuestionElement.appendChild(questionParaElement);

    const newAnswerPara = document.createElement("p");
    newAnswerPara.classList.add(`ans${index}`, "answer", "hidden");
    const newAnswerNode = document.createTextNode(questionArr[index].answer);
    newAnswerPara.appendChild(newAnswerNode);
    newQuestionElement.appendChild(newAnswerPara);

    questionContainer.appendChild(newQuestionElement);
  }
}

displayQuestion(questionArray);

const allQuestionElement = document.getElementsByClassName("questions");
for (let index = 0; index < allQuestionElement.length; index++) {
  const question = allQuestionElement[index];
  question.addEventListener("click", (e) => {
    togggleClass(`ans${index}`,index);
  });
}

function togggleClass(className,index) {
  if (
    document.getElementsByClassName(className)[0].classList.contains("hidden")
  ) {
    document.getElementsByClassName(className)[0].classList.remove("hidden");
     document.getElementsByClassName("q"+index)[0].classList.add("active-section");
    
  } else {
    document.getElementsByClassName(className)[0].classList.add("hidden");
    document.getElementsByClassName("q"+index)[0].classList.remove("active-section");
  }
}

for (let i = 0; i < sectionArray.length; i++) {
  document
    .getElementsByClassName(`section-elem-${i}`)[0]
    .addEventListener("click", () => {
      makeActive(`section-elem-${i}`, i);

      console.log(
        document.getElementsByClassName(`section-elem-${i}`)[0].innerText
      );
    });
}

document
  .getElementsByClassName(`section-elem-${0}`)[0]
  .classList.add("active-section");

function makeActive(className, sectionIndex) {
  if (
    document
      .getElementsByClassName(className)[0]
      .classList.contains("active-section")
  ) {
    document
      .getElementsByClassName(className)[0]
      .classList.remove("active-section");
  } else {
    for (let i = 0; i < sectionArray.length; i++) {
      document
        .getElementsByClassName(`section-elem-${i}`)[0]
        .classList.remove("active-section");
    }
    document
      .getElementsByClassName(className)[0]
      .classList.add("active-section");

    ////// section wise if else condtn to display question in that perticular page
    if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Eligibility & Application"
    ) {
      changeDisplayedQuestions(questionArray);
    } else
      changeDisplayedQuestions(
        newQuestionArray[
          document.getElementsByClassName(`section-elem-${sectionIndex}`)[0].id
        ]
      );

    //  if (
    //   document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
    //     .innerText === " Deadline"
    // ) {
    //   changeDisplayedQuestions(newQuestionArray[]);
    // } else if (
    //   document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
    //     .innerText === "Our Experiences"
    // ) {
    //   changeDisplayedQuestions(newQuestionArray[0]);
    // } else if (
    //   document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
    //     .innerText === "Commitment Bond"
    // ) {
    //   changeDisplayedQuestions(newQuestionArray[1]);
    // } else if (
    //   document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
    //     .innerText === "Program Support"
    // ) {
    //   changeDisplayedQuestions(newQuestionArray[3]);
    // } else {
    //   changeDisplayedQuestions(newQuestionArray[4]);
    // }
  }
}

function changeDisplayedQuestions(questionArr) {
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementsByClassName("questions")[i].children[0].innerText = `${
      questionArr[i] ? questionArr[i].question : ""
    }`;
    document.getElementsByClassName("questions")[i].children[1].innerText = `${
      questionArr[i] ? questionArr[i].answer : ""
    }`;
    if (
      document.getElementsByClassName("questions")[i].children[0].innerText ==
      ""
    ) {
      document.getElementsByClassName("questions")[i].classList.add("hidden");
     
    } else {
      document
        .getElementsByClassName("questions")
        [i].classList.remove("hidden");
       
    }
  }
}
