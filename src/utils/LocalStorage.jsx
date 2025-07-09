const Employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        description: "Submit report",
        date: "2025-05-28",
        categories: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        description: "Client meeting",
        date: "2025-05-27",
        categories: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Code review",
        date: "2025-05-25",
        categories: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        description: "Update documentation",
        date: "2025-05-26",
        categories: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        description: "Fix login bug",
        date: "2025-05-24",
        categories: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Prepare slides",
        date: "2025-05-23",
        categories: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        description: "Research analytics tools",
        date: "2025-05-20",
        categories: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        description: "Design homepage UI",
        date: "2025-05-28",
        categories: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        description: "Team sync-up",
        date: "2025-05-26",
        categories: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Deploy staging build",
        date: "2025-05-25",
        categories: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        description: "Database optimization",
        date: "2025-05-29",
        categories: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        description: "Update website SEO",
        date: "2025-05-24",
        categories: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Test feature branch",
        date: "2025-05-22",
        categories: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        description: "Refactor old code",
        date: "2025-05-20",
        categories: "Refactoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Train new interns",
        date: "2025-05-18",
        categories: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        description: "Organize team lunch",
        date: "2025-05-30",
        categories: "Team Building",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        description: "Write unit tests",
        date: "2025-05-26",
        categories: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Audit codebase",
        date: "2025-05-22",
        categories: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        description: "Migrate database",
        date: "2025-05-21",
        categories: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        description: "Update user onboarding",
        date: "2025-05-19",
        categories: "UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        description: "Clean up project repo",
        date: "2025-05-17",
        categories: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const Admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const Setlocalstorage=()=>{
    localStorage.setItem('Employee', JSON.stringify(Employee))
    localStorage.setItem('Admin' , JSON.stringify(Admin))
}

export const Getlocalstorage=()=>{
    const Employee = JSON.parse(localStorage.getItem('Employee'))
    const Admin = JSON.parse(localStorage.getItem('Admin'))
    return {Employee,Admin}
}