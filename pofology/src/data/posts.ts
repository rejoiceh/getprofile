import { Post } from '@/types';
import { FiLink, FiGithub } from 'react-icons/fi';


export const posts: Post[] = [
  {
    id: 1,
    title: 'BiteWise (Menu Item Recommender)',
    publishedAt: 'NLP & Deep Learning',
    thumbnailUrl: '/images/posts/bitewise.png',
    imageUrl: '/images/posts/bitewise.png',
    authorName: 'Dec 2023',
    description: `Implemented transfer learning & Aspect-Based Sentiment Analysis with 3 advanced LLM models (DistilBERT,
DeBERTa, PyABSA) in Python to provide precise insights beyond standard Yelp ratings`,
    demoUrl: 'https://www.canva.com/design/DAF12tXj_FU/uGXHRvzlfXO7gTt2voSJmA/view?#1',
    codeUrl: 'https://github.com/jjunhu/BiteWise',
  },
  {
    id: 2,
    title: 'DQN & LSTM for Human-Robot Interaction',
    publishedAt: 'Reinforcement & Deep Learning',
    thumbnailUrl: '/images/posts/hri.png',
    imageUrl: '/images/posts/hri.png',
    authorName: 'Dec 2023',
    description: `Developed & optimized RL system with DQN & KNN, SVM, Random Forest, LSTMs, & designed state/action/reward`,
    demoUrl: '',
    codeUrl: '',
  },
  {
    id: 3,
    title: '2048 with Reinforcement Learning',
    publishedAt: 'Robot Learning',
    thumbnailUrl: '/images/posts/2048.png',
    imageUrl: '/images/posts/2048.png',
    authorName: 'Dec 2023',
    description: `Researched and tested whether stochastic Policy Gradient algorithms like PPO can outperform DQN in game 2048`,
    demoUrl: 'https://www.youtube.com/watch?v=T5To2UZ9w50&feature=youtu.be',
    codeUrl: '',
  },
  {
    id: 4,
    title: 'CrochEtsy',
    publishedAt: 'Dynamic Server-Side Website',
    thumbnailUrl: '/images/posts/crochetsy.png',
    imageUrl: '/images/posts/crochetsy.png',
    authorName: 'May 2021',
    description: `Created online shopping catalog/Etsy website for crocheted products with CRUD actions in PHP, JavaScript, HTML/CSS, SQLite`,
    demoUrl: '',
    codeUrl: '',
  },
  {

    id: 5,
    title: 'Cure the Cancer!',
    publishedAt: 'Python Tile Map Game',
    thumbnailUrl: '/images/posts/curethecancer.png',
    imageUrl: '/images/posts/curethecancer.png',
    authorName: 'May 2020',
    description: `Coded a tile map game in Python using OOP, A* Algorithm`,
    demoUrl: 'https://www.youtube.com/watch?v=n1aUzbX9yqE',
    codeUrl: '',
  },
  {
    id: 6,
    title: 'Deployed Deep Learning Kidney Segmentation for ADPKD Disease MRI',
    publishedAt: 'Published Paper',
    thumbnailUrl: '/images/posts/researchpaper.jpeg',
    imageUrl: '/images/posts/researchpaper.jpeg',
    authorName: 'Feb 2022',
    description: `Published in Radiology AI with 17 citations`,
    demoUrl: 'https://pubs.rsna.org/doi/10.1148/ryai.210205',
    codeUrl: '',
  }
];
