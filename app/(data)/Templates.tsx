export default [
    {
      name: "Blog Title",
      desc: "Generate creative and relevant blog titles based on the provided content outline and niche.",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/4180/4180996.png",
      slug: "generate-blog-title",
      aiPrompt: "Provide 5 unique blog title ideas based on the given niche and outline. Output must be in bullet points and formatted for a Rich Text Editor.",
      form: [
        {
          label: "Enter Niche Topic",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter Blog Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Blog Content",
      desc: "Generate engaging blog content based on your topic and outline using AI-powered writing assistance.",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
      slug: "blog-content-generation",
      aiPrompt: "Create a detailed blog post based on the given topic and outline. Format the output for a Rich Text Editor.",
      form: [
        {
          label: "Enter your Blog Topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter Blog Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Blog Topic Ideas",
      desc: "Generate viral and engaging blog topic ideas tailored to your niche.",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
      slug: "blog-topic-idea",
      aiPrompt: "Generate 5 blog topic ideas based on the given niche. Output only bullet points, formatted for a Rich Text Editor.",
      form: [
        {
          label: "Enter Your Niche",
          field: "input",
          name: "niche",
          required: true,
        },
      ],
    },
    {
      name: "YouTube SEO Title",
      desc: "Generate SEO-optimized, high-ranking YouTube titles based on your video’s keywords and outline.",
      category: "YouTube Tools",
      icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
      slug: "youtube-seo-title",
      aiPrompt: "Provide 5 SEO-optimized YouTube title ideas in bullet points. Use the provided keywords and outline. Output must be in HTML format.",
      form: [
        {
          label: "Enter Video Keywords",
          field: "input",
          name: "keywords",
          required: true,
        },
        {
          label: "Enter Video Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "YouTube Description",
      desc: "Create concise, engaging YouTube descriptions, enhanced with emojis to attract more viewers.",
      category: "YouTube Tools",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
      slug: "youtube-description",
      aiPrompt: "Generate a 4-5 line YouTube description based on the provided topic and outline. Add emojis to make it engaging, formatted for a Rich Text Editor.",
      form: [
        {
          label: "Enter Video Topic/Title",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter Video Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "YouTube Tags",
      desc: "Generate relevant and optimized tags to improve your YouTube video’s discoverability.",
      category: "YouTube Tools",
      icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
      slug: "youtube-tag",
      aiPrompt: "Generate 10 relevant YouTube tags based on the provided title and outline. Output should be in bullet points for a Rich Text Editor.",
      form: [
        {
          label: "Enter Video Title",
          field: "input",
          name: "title",
          required: true,
        },
        {
          label: "Enter Video Outline (Optional)",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Rewrite Article (Plagiarism-Free)",
      desc: "Transform your article or blog post into a unique, plagiarism-free version that bypasses AI detectors.",
      icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
      category: "Rewriting Tool",
      slug: "rewrite-article",
      aiPrompt: "Rewrite the provided article to ensure it is plagiarism-free. Output must be formatted for a Rich Text Editor.",
      form: [
        {
          label: "🤖 Provide Article/Content to Rewrite",
          field: "textarea",
          name: "article",
          required: true,
        },
      ],
    },
    {
      name: "Text Improver",
      desc: "Polish your text by eliminating errors, improving clarity, and refining tone with AI-enhanced suggestions.",
      icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
      category: "Writing Assistant",
      slug: "text-improver",
      aiPrompt: "Enhance the provided text by eliminating grammar errors and refining the tone. Format output for a Rich Text Editor.",
      form: [
        {
          label: "Enter Text to Improve",
          field: "textarea",
          name: "textToImprove",
        },
      ],
    },
    {
      name: "Add Emojis to Text",
      desc: "Infuse your content with emojis to make it more expressive and engaging.",
      icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
      category: "Blog",
      slug: "add-emoji-to-text",
      aiPrompt: "Add relevant emojis to the provided text. Format the output for a Rich Text Editor.",
      form: [
        {
          label: "Enter Text to Add Emojis",
          field: "textarea",
          name: "outline",
          required: true,
        },
      ],
    },
    {
      name: "Instagram Post Generator",
      desc: "Generate engaging Instagram posts tailored to your keywords and niche.",
      icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
      category: "Social Media",
      slug: "instagram-post-generator",
      aiPrompt: "Generate 3 Instagram posts based on the provided keywords. Format output for a Rich Text Editor.",
      form: [
        {
          label: "Enter Keywords for Post",
          field: "input",
          name: "keywords",
          required: true,
        },
      ],
    },
    {
      name: "Instagram Hashtag Generator",
      desc: "Generate trending Instagram hashtags for better visibility.",
      icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
      category: "Social Media",
      slug: "instagram-hash-tag-generator",
      aiPrompt: "Generate 15 trending Instagram hashtags based on the provided keywords. Format output for a Rich Text Editor.",
      form: [
        {
          label: "Enter Keywords for Hashtags",
          field: "input",
          name: "keywords",
          required: true,
        },
      ],
    },
    {
      name: "Explain Code",
      desc: "Understand complex code with AI-powered line-by-line explanations.",
      icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
      category: "Coding",
      slug: "explain-code",
      aiPrompt: "Explain the provided code line by line. Format output as a code block within a Rich Text Editor.",
      form: [
        {
          label: "Enter Code to Explain",
          field: "textarea",
          name: "codeDescription",
          required: true,
        },
      ],
    },
    {
      name: "English Grammar Check",
      desc: "Correct grammatical errors in any text input.",
      icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
      category: "Language Tools",
      slug: "english-grammar-checker",
      aiPrompt: 
        "Correct grammatical mistakes in the provided text and rewrite it professionally. Output in Rich Text Editor format.",
      form: [
        { 
          label: "Enter Text for Grammar Check", 
          field: "textarea", 
          name: "inputText", 
          required: true 
        }
      ]
    },
    {
      name: "Write Code",
      desc: "Generate code snippets in any programming language based on your description.",
      icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
      category: "Coding",
      slug: "write-code",
      aiPrompt: 
        "Generate code based on the given description. Provide the output in a code block within Rich Text Editor format.",
      form: [
        { 
          label: "Enter Code Description & Language", 
          field: "textarea", 
          name: "codeDescription", 
          required: true 
        }
      ]
    },
    {
      name: "Content Summarizer",
      desc: "Summarize long content into concise points or paragraphs.",
      icon: "https://cdn-icons-png.flaticon.com/128/4139/4139313.png",
      category: "Summarization Tool",
      slug: "content-summarizer",
      aiPrompt: 
        "Summarize the provided content into key points or a short paragraph. Output in Rich Text Editor format.",
      form: [
        { 
          label: "Enter Content to Summarize", 
          field: "textarea", 
          name: "content", 
          required: true 
        }
      ]
    },
    {
      name: "Email Generator",
      desc: "Generate emails with formal or informal tones based on purpose.",
      icon: "https://cdn-icons-png.flaticon.com/128/893/893292.png",
      category: "Communication Tool",
      slug: "email-generator",
      aiPrompt: 
        "Generate an {{recipientType}} email with the following purpose: {{purpose}}. Provide the output in a structured, readable format.",
      form: [
        { 
          label: "Purpose of Email", 
          field: "textarea", 
          name: "purpose", 
          required: true 
        },
        { 
          label: "Recipient Type", 
          field: "dropdown", 
          name: "recipientType", 
          options: ["Formal", "Informal"], 
          required: true 
        }
      ]
  },
  {
    name: "Resume Bullet Points Generator",
    desc: "Create impactful resume bullet points for a specific role.",
    icon: "https://cdn-icons-png.flaticon.com/128/4116/4116609.png",
    category: "Resume Builder",
    slug: "resume-bullet-points-generator",
    aiPrompt: 
      "Generate 3-5 professional resume bullet points for the role of {{role}} based on the following experience: {{experience}}.",
    form: [
      { 
        label: "Job Role", 
        field: "input", 
        name: "role", 
        required: true 
      },
      { 
        label: "Experience Description", 
        field: "textarea", 
        name: "experience", 
        required: true 
      }
    ]
},
{
  name: "FAQ Generator",
  desc: "Generate frequently asked questions with answers for websites.",
  icon: "https://cdn-icons-png.flaticon.com/128/4403/4403555.png",
  category: "Content Creation Tool",
  slug: "faq-generator",
  aiPrompt: 
    "Create 5 FAQs with answers based on the following product or service description: {{description}}.",
  form: [
    { 
      label: "Product/Service Description", 
      field: "textarea", 
      name: "description", 
      required: true 
    }
  ]
},
{
  name: "Meta Description Generator",
  desc: "Create SEO-friendly meta descriptions for better visibility.",
  icon: "https://cdn-icons-png.flaticon.com/128/5234/5234209.png",
  category: "SEO Tool",
  slug: "meta-description-generator",
  aiPrompt: 
    "Generate an SEO-optimized meta description within 160 characters based on the following content: {{content}}.",
  form: [
    { 
      label: "Content to Summarize", 
      field: "textarea", 
      name: "content", 
      required: true 
    }
  ]
},
{
  name: "Interview Question Generator",
  desc: "Generate interview questions for a specific job role or topic.",
  icon: "https://cdn-icons-png.flaticon.com/128/2179/2179306.png",
  category: "Recruitment Tool",
  slug: "interview-question-generator",
  aiPrompt: 
    "Generate 5 interview questions for the role or topic: {{role}}.",
  form: [
    { 
      label: "Role/Topic", 
      field: "input", 
      name: "role", 
      required: true 
    }
  ]
},
{
  name: "Product Review Generator",
  desc: "Generate product reviews based on features and experience.",
  icon: "https://cdn-icons-png.flaticon.com/128/2839/2839244.png",
  category: "Content Creation Tool",
  slug: "product-review-generator",
  aiPrompt: 
    "Write a detailed review for the product '{{productName}}' based on the following features and experience: {{features}}.",
  form: [
    { 
      label: "Product Name", 
      field: "input", 
      name: "productName", 
      required: true 
    },
    { 
      label: "Product Features/Experience", 
      field: "textarea", 
      name: "features", 
      required: true 
    }
  ]
}

  ];

  
// Original

// export default [{ name: "Blog Title",
//     desc:"An AI tool that generates blog title based on the content of the blog",
//     category:'Blog',
//     icon:'',
//     aiPrompt:'Give me 5 blog topic idea in bullet points only based on given niche & outline and give me result in Rich Text Editor format',
//     slug:'generate-blog-title',
//     form:[
//         {
//             label:"Enter Niche Topic",
//             field:"input",
//             name:"niche",
//             required:true,
//         },
//         {
//             label:"Enter Blog Outline",
//             field:"textarea",
//             name:"outline", 
//         }
//     ]
//  },
//  {
//     name: 'Blog Content',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     category: 'blog',
//     icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
//     slug: 'blog-content-generation',
//     aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
//     form: [
//         {
//             label: 'Enter your blog topic',
//             field: 'input',
//             name: 'topic',
//             required:true
//         },
//         {
//             label: 'Enter blog Outline here',
//             field: 'textarea',
//             name: 'outline'
//         }
//     ]
// },
// {
//     name: 'Blog Topic Ideas',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     category: 'Blog',
//     icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
//     slug: 'blog-topic-idea',
//     aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
//     form: [
//         {
//             label: 'Enter your Niche',
//             field: 'input',
//             name: 'niche',
//             required:true
//         },
//     ]
// },
// {
//     name: 'Youtube SEO Title',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     category: 'Youtube Tools',
//     icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
//     slug: 'youtube-seo-title',
//     aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
//     form: [
//         {
//             label: 'Enter your youtube video topic keyowords',
//             field: 'input',
//             name: 'keywords',
//             required:true
//         },
//         {
//             label: 'Enter youtube description Outline here',
//             field: 'textarea',
//             name: 'outline'
//         }
//     ]

// },
// {

//     name: 'Youtube Description',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     category: 'Youtube Tool',
//     icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
//     slug: 'youtube-description',
//     aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
//     form: [
//         {
//             label: 'Enter your blog topic/title',
//             field: 'input',
//             name: 'topic',
//             required:true
//         },
//         {
//             label: 'Enter youtube Outline here',
//             field: 'textarea',
//             name: 'outline'
//         }
//     ]
// },
// {
//     name: 'Youtube Tags',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     category: 'Youtube Tool',
//     icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
//     slug: 'youtube-tag',

//     aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

//     form: [
//         {
//             label: 'Enter your youtube title',
//             field: 'input',
//             name: 'title',
//             required:true
//         },
//         {
//             label: 'Enter youtube video Outline here (Optional)',
//             field: 'textarea',
//             name: 'outline'
//         }
//     ]
// },

// {
//     name: 'Rewrite Article (Plagiarism Free)',
//     desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
//     icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
//     category: 'Rewriting Tool',
//     slug: 'rewrite-article',
//     aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
//     form: [
//         {
//             label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
//             field: 'textarea',
//             name: 'article',
//             required:true
//         }
//     ]
// },
// {
//     name: 'Text Improver',
//     desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
//     icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
//     category: 'Writing Assistant',
//     slug: 'text-improver',
//     aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
//     form: [
//         {
//             label: 'Enter text that you want to re-write or improve',
//             field: 'textarea',
//             name: 'textToImprove'
//         }
//     ]
// },
// {
//     name: 'Add Emojis to Text',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
//     category: 'blog',
//     slug: 'add-emoji-to-text',
//     aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
//     form: [
//         {
//             label: 'Enter your text to add emojis',
//             field: 'textarea',
//             name: 'outline',
//             required:true
//         }
//     ]
// },
// {
//     name: 'Instagram Post Generator',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
//     category: 'blog',
   
//     slug: 'instagram-post-generator',
//     aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
//     form: [
//         {
//             label: 'Enter Keywords for your post',
//             field: 'input',
//             name: 'keywords',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Instagram Hash Tag Generator',
//     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
//     icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
//     category: 'blog',
   
//     slug: 'instagram-hash-tag-generator',
//     aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
//     form: [
//         {
//             label: 'Enter Keywords for your instagram hastag',
//             field: 'input',
//             name: 'keywords',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Instagram Post/Reel Idea',
//     desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
//     icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
//     category: 'instagram',
   
//     slug: 'instagram-post-idea-generator',
//     aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
//     form: [
//         {
//             label: 'Enter Keywords / Niche for your instagram idea',
//             field: 'input',
//             name: 'keywords',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'English Grammer Check',
//     desc: 'AI Model to Correct your english grammer by providing the text',
//     icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
//     category: 'english',
   
//     slug: 'english-grammer-checker',
//     aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
//     form: [
//         {
//             label: 'Enter text to correct the grammer',
//             field: 'input',
//             name: 'inputText',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Write Code',
//     desc: 'AI Model to generate programming code in any language',
//     icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
//     category: 'Coding',
   
//     slug: 'write-code',
//     aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
//     form: [
//         {
//             label: 'Enter description of code you want along with Programming Lang',
//             field: 'textarea',
//             name: 'codeDesscripton',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Explain Code',
//     desc: 'AI Model to explain programming code in any language',
//     icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
//     category: 'Coding',
   
//     slug: 'explain-code',
//     aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
//     form: [
//         {
//             label: 'Enter code which you want to understand',
//             field: 'textarea',
//             name: 'codeDesscripton',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Code Bug Detector',
//     desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
//     icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
//     category: 'code-bug-detector',
   
//     slug: 'code-bug-detector',
//     aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
//     form: [
//         {
//             label: 'Enter code which you want to test bug',
//             field: 'textarea',
//             name: 'codeInput',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Tagline Generator',
//     desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
//     icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
//     category: 'Marketting',
   
//     slug: 'tagline-generator',
//     aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
//     form: [
//         {
//             label: 'Product/Brand Name',
//             field: 'input',
//             name: 'productName',
//             required:true
//         },
//         {
//             label: 'What you are selling / Marketting',
//             field: 'textarea',
//             name: 'outline',
//             required:true
//         },
       
//     ]
// },
// {
//     name: 'Product Description',
//     desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
//     icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
//     category: 'Marketting',
   
//     slug: 'product-description',
//     aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
//     form: [
//         {
//             label: 'Product Name',
//             field: 'input',
//             name: 'productName',
//             required:true
//         },
//         {
//             label: 'Product Details',
//             field: 'textarea',
//             name: 'outline',
//             required:true
//         },
       
//     ]
// },

// ];
