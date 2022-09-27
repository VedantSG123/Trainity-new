document.body.classList.add("font-sans");
const newQuestionArray = [
  [
    {
      question:
        "Q. I have no experience in the career field. Can I still apply?",
      answer:
        "Absolutely! Our experiences are made for newbies in the field. All you do need to take part is an interest in the field and access to the internet!"+" "+

        "We recommend checking each program guide to see what the exact program requirements are."+" "+
        
        "We have a Free Trial facility that allows you to test out the program and complete 2 projects.",
    },
    {
      question: " Q. What’s the time commitment required each week?",
      answer:
        "The time commitment is expected to be around 5 - 10 hrs per week (depending on which program you choose and your prior level of experience). The experience is virtual and mostly asynchronous (meaning you can work according to your schedule) so you can be flexible on how and when you choose to do the work."+" "+

        "However, the deadlines are fixed and must be met to receive a certificate.",
    },
    {
      question:
        " Q. Is this an internship?",
      answer:
        "No, this is not an internship. You will not be working for any of the mentors, the company of the mentor, or Trainity. This is an educational experience designed to give you insight into what it's like to be in that role and help you build up a portfolio for your first job!",
    },
    {
      question: "Q. How do I sign up for an experience?",
      answer:
        "The first step is to create an account"+" "+ 

       "Creating an account with us is completely free."+" "+
        
       "When you have an account, log in and select the experience you are interested in."+" "+
        
        "You will be required to pay a commitment bond in order to sign up for an experience, and if you are able to finish the experience by the assigned deadline, this bond will be refunded to you.",
    },
    {
      question:
        "Q. Can I put this on my CV/Resume/LinkedIn?",
      answer:
        "Absolutely! After you complete an experience, you can add the experience to your CV, Resume, or LinkedIn."+" "+

        "However, we kindly ask you to  not list yourself as an employee at Trainity or any of our Mentor companies."+" "+
        
        "For the moment, Trainity is not recognized as industrial work experience. We are in the process of getting these experiences approved and recognized and we will email you when they are."+" "+
        
        "For this reason, we recommend including the completion of the program in the 'Extracurricular Activities' or 'Projects' section of your resume in a similar format to below.",
    },
    {
      question:
        "Q. Who is running the experience? ",
      answer:
        "The experience is run by the Trainity Team and led by a team of industry mentors who help us create the content and curriculum.",
    },
    {
      question:
        "Q. How does the EMI option work? How much amount will I need to pay every month? Do I need to pay extra as interest cost?",
      answer:
        "If you choose to pay via EMI, a certain amount will be deducted from your account every month. For example, if the total program fee (including taxes) is Rs. 100 and you choose to pay via 12 months EMI then you will be charged Rs. 8.33 (100/12) every month. Since these are no cost EMIs, you don't need to pay anything extra as interest or processing fee. The total program fee you would pay over the duration of the EMI will remain the same as it would have been if you paid all of it upfront.",
    },
    {
      question:
        "Q. Will I receive a job at the end of the program?",
      answer:
        "Trainity is primarily an education platform and does not guarantee anyone employment at the end of the program."+" "+

        "However, we do have a network of recruiters who do occasionally look at user work submissions and hire candidates with exceptional work. These recruiters operate according to their own employment needs and schedules outside of Trainity's influence and Trainity will act as a facilitator for these opportunities.",
    },
  ],
  [
    {
      question:
        "Q. Are your programs free?",
      answer:
        "They can be!"+" "+

        "Trainity requires a **commitment bond** to be paid prior to Entering a course. This means that you pay a commitment bond equivalent to ₹7499, and if you attempt all tasks in the experience before the assigned deadline, you will get a full refund."+" "+
        
        "If you cannot afford the commitment bond, we do offer financial aid to users that meet certain criteria.",
    },
    {
      question:
        "Q. How much does the program cost?",
      answer:
        "The program **can be free** if you finish the program."+" "+

        "Trainity requires a **commitment bond** to be paid prior to Entering a course. This means that you pay a commitment bond equivalent to ₹7499, and if you attempt all tasks in the experience before the assigned deadline, you will get a full refund."+" "+
        
        "Depending on your financial institution or location, you may have the option to pay in your local currency, some of which may incur transaction fees or exchange rates. These are not claimed by Trainity and may not be included in your refund."+" "+
        
        "If you cannot afford the commitment bond, we do offer financial aid to users that meet certain criteria.",
    },
    {
      question: "Q.  What happens if I don't finish a program?",
      answer:
        "If you are unable to complete the course by the scheduled deadline(s), we will forfeit your commitment bond, and you will not receive a certificate of completion."+" "+

        "In exchange you will be given permanent access to the content, so that you can continue learning in your own time - so effectively it will be just like buying an online course."+" "+
        
        "However, please note that support and submissions will be restricted after the program ends, and a certificate of completion will not be issued if you finish your work after the deadline.",
    },
    {
      question:
        "Q. How difficult is it to pass the course?",
      answer:
        "We want to give you the best chance of getting your money back. The course is not pass/fail. If you attempt every task (that means no blank submissions and no copying other people's work!) and get your submissions in on time, you will get your money back. It is up to you to make the most of the experience and submit the best work you can.",
    },
    {
      question:
        "Q. Why use a commitment bond? Why not sell the course, or make it free?",
      answer:
        "Good question!"+" "+

        "Our biggest goal is to educate."+" "+
        
        "When we started, we tried selling our courses outright, as well as running them for free. In both cases, our completion rate was very low - our team has been in education for many years and this is a problem many online educators are having. People sign up for courses but lose interest the moment the work starts getting serious. We needed a way to motivate people to reach the end and the commitment bond was our solution. When we implemented this model, our completion rates shot up. Would you believe they are now 10 times higher than the average completion rate of other online education platforms? We are not trying to scam people by making it impossible to reach the end either. All you have to do is attempt the tasks - the course is not pass/fail. That means no blank submissions and no plagiarism. Incorrect answers and attempts are fine! We understand that's part of the process!"+" "+
        
        "If it's too hard, or not beneficial to you, we have a 7-day change of mind period (starting the day that the program starts) where we give you your money back no questions asked. Hopefully, this helps to alleviate some of your concerns and explains how and why the model came about.",
    }
    ],[
    {
      question:
        "Q. Can I get the deadline extended?",
      answer:
        "Unfortunately not."+" "+

        "If you miss the deadline, you will not be eligible for completion of the course."+" "+
        
        "You will retain access to the content however you will not receive a certificate of completion at the end of the course."+" "+
        
        "The only acceptable reason to drop out and get a full refund is a medical reason (yourself or a close family member that you need to attend to). We do ask for some sort of proof to provide a refund for this reason.",
    },
    {
      question:
        "Q.Are there specific times I need to be present?",
      answer:
        "Nope!"+" "+

        "Everything is done at your own pace besides submission deadlines as a commitment."+" "+
        
        "There are 2 deadlines at the end of the program that must be met in order to complete the program."+" "+
        
        "We do not offer extensions on these deadlines.",
    },
    {
      question:
        "Q. What if I have an unavoidable circumstance and I can't make a submission or need to drop out?",
      answer:
        "If you are unhappy with the program, you can receive a refund within the first 7 days of the program."+" "+

        "After that, the only acceptable reason to drop out and get a full refund is a medical reason (yourself or a close family member that you need to attend to). We do ask for some sort of proof to provide a refund for this reason",
    },
  ],
  [
    {
      question:
        "Q. Am I eligible for a refund?",
      answer:
        "In order to have your commitment bond refunded, you must attempt all tasks before the first deadline of the program."+" "+

        "Users who are unable to demonstrate a sincere attempt to engage with the work or are found plagiarising submissions will not be eligible for a refund."+" "+
        
        "In some cases, you may be ineligible for a refund, and will instead receive a premium package, at no extra cost, upon your completion of the program.",
    },
    
  ]
];
let questionArray = [
  {
    question: "Q. What is Trainity?",
    answer:
      "Trainity is an experience platform dedicated to helping everyone discover and reskill into their next internship/job. Our programs are designed to teach you the fundamentals of a role by simulating the tasks would experience in this profession. By doing these programs you learn and build the experience needed to land that internship/job in Data Analytics.",
  },

  {
    question:
      "Q. How do you collect my data? What do you do with it?",
    answer:
      "We treat the collection and storage of your data very seriously. We will collect some data on you to help us better customize our virtual experiences for you. We also have a recruitment network that occasionally comes to us to recruit candidates based on samples of work generated during the programs. All work completed during the program is available to be viewed by our recruitment network. Please note that this does not include any personal information, and our programs will not require any personal information to complete. If a recruiter is interested in your work, Trainity will contact you to opt-in for an introduction. We encourage you to read our privacy policy and our terms of use.",
  },
  {
    question:
      "Q. How does Trainity make money?",
    answer:
      "Trainity makes money in several ways:"+" "+
      "-> Commitment Bonds"+" "+
      
      "-> Enterprise/Business recruitment fees",
  }
];




let sectionArray = [
  { id: 1, title: "More About Trainity" },
  { id: 2, title: "Our Experiences" },
  { id: 3, title: "Commitment Bond" },
  { id: 4, title: "Deadline" },
  { id: 5, title: "Program Support" },
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
    togggleClass(`ans${index}`);
  });
}

function togggleClass(className) {
  if (
    document.getElementsByClassName(className)[0].classList.contains("hidden")
  ) {
    document.getElementsByClassName(className)[0].classList.remove("hidden");
  } else {
    document.getElementsByClassName(className)[0].classList.add("hidden");
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
        .innerText === "More About Trainity"
    ) {
      changeDisplayedQuestions(questionArray);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === " Deadline"
    ) {
      changeDisplayedQuestions(newQuestionArray[2]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Our Experiences"
    ) {
      changeDisplayedQuestions(newQuestionArray[0]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Commitment Bond"
    ) {
      changeDisplayedQuestions(newQuestionArray[1]);
    } else if (
      document.getElementsByClassName(`section-elem-${sectionIndex}`)[0]
        .innerText === "Program Support"
    ) {
      changeDisplayedQuestions(newQuestionArray[3]);
    } else {
      changeDisplayedQuestions(newQuestionArray[4]);
    }
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

