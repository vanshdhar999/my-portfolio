import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/WorkExperience.css";
import placeholderLogo from "../images/course-logo.svg"

const CourseWork = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="work-experience-container">
      <h2 className="work-experience-header" data-aos="fade-up">
        Courses and Learning
      </h2>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">August 2024 - December 2024</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={placeholderLogo}
              alt="Headstarter AI Logo"
              className="company-logo"
            />
            <h3>Artificial Intelligence and Data Science</h3>
          </div>
          <p>Topics Covered</p>
          <ul>
            <li>
              The first phase was devoted to Tabular AI and different SOTA algorithms used
              to solve problems in tabular AI. Explored algorithms like XGBoost, Decision Trees, 
              Gradient Boosting, Light GBM, CatBoost etc. Worked on a real world dataset to 
              predict the hourly bike rental using XGBoost. Find the code <a href="https://youtube.com" style={{"color":"green"}}>here.</a>
            </li>
            <li>
              The second phase was spent learning about Neural Networks and how they act as a 
              data pre-processing pipeline. Followed by Computer Vision, Convolutional Neural Networks in
              depth. Covered basic and advanced details about CNNs and various SOTA Computer Vision Architecture like
              ResNet, Inception-Net, AlexNet, Efficient-Net and Google-Net. Worked on a hands-on assignment
              to predict celebrities with arched eyebrows, using Transfer Learning. Find the code <a style={{"color":"green"}} href="https://github.com/vanshdhar999">here</a>
            </li>
            <li>
              The last phase of the course dealth with Natural Language Processing and Generative AI. Discussed the famous
              Attention Mechanism in depth. Explored the decoder and encoder model with a hands-on project on building a Transformer Architecutre to predict 
              Jokes. We also covered text pre-processing techniques and how word embeddings are learnt and used in training 
              LLMs. Followed by Generative AI, which included important topics like Prompting Techniques, RLHF, RAGs etc.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">August 2024 - December 2024</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={placeholderLogo}
              alt="placeholder logo"
              className="company-logo"
            />
            <h3>Machine Learning</h3>
          </div>
          <p>Topics Covered</p>
          <ul>
            <li>
            Gained a foundational understanding of supervised, unsupervised learning algorithms.
            </li>
            <li>
            Studied the Bayes classifier and principles of optimality, risk minimization, and generalization error estimation.
            Learned and implemented models such as Perceptron, logistic regression, least squares, and regularization techniques.
            Explored advanced methods including Kernel methods, Support Vector Machines (SVMs), and neural network models like multilayer perceptrons (MLPs) and convolutional neural networks (CNNs).
            Developed classifier ensembles and studied the Adaboost algorithm for boosting model accuracy.
            </li>
            <li>
            Mastered generative models and parameter estimation techniques, including Maximum Likelihood Estimation (MLE) and Bayesian methods.
            Worked with latent variables and the Expectation-Maximization (EM) algorithm for probabilistic modeling. 
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">
          August 2024 - December 2024
        </div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={placeholderLogo}
              alt="placeholderlogo"
              className="company-logo"
            />
            <h3>Introduction To Scalable Systems</h3>
          </div>
          <p>Topics Covered</p>
          <ul>
            <li>
            Gained an understanding of computer organization and single-core optimizations, including cache hierarchy and vectorization.
            Explored multi-core, shared memory, distributed memory, and GPU architectures for high-performance computing.
            </li>
            <li>
            Developed expertise in matrices, trees, queues, graphs, and concurrent data structures.
            Conducted performance and scalability analysis and mastered algorithmic complexity and strategies.
            Utilized GitHub Copilot and Prompt Engineering for efficient algorithm design.
            </li>
            <li>
              Implemented parallel computing solutions using OpenMP, MPI. Find the code <a style={{"color":"green"}} href="https://github.com/vanshdhar999">here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseWork;
