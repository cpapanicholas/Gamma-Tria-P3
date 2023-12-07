// const { number } = require("prop-types");

// const workouts = [
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 1",
//     "description": "Strength training for chest and back",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Bench Press",
//               "type": "Strength",
//               "muscle": "Chest",
//               "equipment": "Barbell",
//               "difficulty": "Beginner",
//               "instructions": "Focus on proper form"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Single Arm Row",
//               "type": "Strength",
//               "muscle": "Back",
//               "equipment": "Dumbbell",
//               "difficulty": "Beginner",
//               "instructions": "Maintain a straight back"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 2",
//     "description": "Leg day workout with squats and lunges",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Squat",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Barbell",
//               "difficulty": "Intermediate",
//               "instructions": "Maintain proper depth"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Lunges",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Bodyweight",
//               "difficulty": "Intermediate",
//               "instructions": "Alternate legs with each rep"
//             },
//             "sets": [
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 3",
//     "description": "Strength training for chest and back",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Bench Press",
//               "type": "Strength",
//               "muscle": "Chest",
//               "equipment": "Barbell",
//               "difficulty": "Beginner",
//               "instructions": "Focus on proper form"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Single Arm Row",
//               "type": "Strength",
//               "muscle": "Back",
//               "equipment": "Dumbbell",
//               "difficulty": "Beginner",
//               "instructions": "Maintain a straight back"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 4",
//     "description": "Leg day workout with squats and lunges",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Squat",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Barbell",
//               "difficulty": "Intermediate",
//               "instructions": "Maintain proper depth"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Lunges",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Bodyweight",
//               "difficulty": "Intermediate",
//               "instructions": "Alternate legs with each rep"
//             },
//             "sets": [
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 5",
//     "description": "Strength training for chest and back",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Bench Press",
//               "type": "Strength",
//               "muscle": "Chest",
//               "equipment": "Barbell",
//               "difficulty": "Beginner",
//               "instructions": "Focus on proper form"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Single Arm Row",
//               "type": "Strength",
//               "muscle": "Back",
//               "equipment": "Dumbbell",
//               "difficulty": "Beginner",
//               "instructions": "Maintain a straight back"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "userId": "",
//     "originalId": "",
//     "name": "Workout 6",
//     "description": "Leg day workout with squats and lunges",
//     "workout": [
//       {
//         "phase": "1",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Squat",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Barbell",
//               "difficulty": "Intermediate",
//               "instructions": "Maintain proper depth"
//             },
//             "sets": [
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 },
//               { "reps": 5, "weight": 0 }
//             ]
//           }
//         ]
//       },
//       {
//         "phase": "2",
//         "exercises": [
//           {
//             "exercise": {
//               "name": "Lunges",
//               "type": "Strength",
//               "muscle": "Legs",
//               "equipment": "Bodyweight",
//               "difficulty": "Intermediate",
//               "instructions": "Alternate legs with each rep"
//             },
//             "sets": [
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 },
//               { "reps": 10, "weight": 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
// ]

// {
//   "programInput": {
//     "originalId": "",
//     "userId": "",
//     "name": "test",
//     "description": "this is a test",
//     "duration": "4 days",
//     "workouts": [
//       {
//         "day": "1",
//         "workout": "656b3b478cb4dd609e424448"
//       },
//       {
//         "day": "2",
//         "workout": "656db7d364fb0c0f07b44fda"
//       },
//       {
//         "day": "3",
//         "workout": "656db8a6963bbf164764f70b"
//       },
//       {
//         "day": "4",
//         "workout": "656db8b8963bbf164764f71d"
//       }
//     ]
//   }
// }

const names = [
  'Liam',
  'Olivia',
  'Noah',
  'Emma',
  'Sophia',
  'Jackson',
  'Ava',
  'Oliver',
  'Isabella',
  'Lucas',
  'Mia',
  'Charlotte',
  'Henry',
  'Amelia',
  'Benjamin',
  'Evelyn',
  'Alexander',
  'Harper',
  'James',
  'Abigail',
  'Ethan',
  'Emily',
  'Michael',
  'Ella',
  'William',
  'Scarlett',
  'Daniel',
  'Grace',
  'Matthew',
  'Lily',
  'Logan',
  'Chloe',
  'Sebastian',
  'Eleanor',
  'Jack',
  'Sofia',
  'Aiden',
  'Madison',
  'Owen',
  'Luna',
  'Samuel',
  'Avery',
  'Carter',
  'Addison',
  'Wyatt',
  'Hazel',
  'Luke',
  'Elena',
  'Jayden',
  'Nora',
  'Dylan',
  'Camila',
  'Grayson',
  'Aria',
  'Levi',
  'Zoe',
  'Isaac',
  'Penelope',
  'Gabriel',
  'Aubrey',
  'Julian',
  'Stella',
  'Mateo',
  'Aurora',
  'Anthony',
  'Skylar',
  'Jaxon',
  'Claire',
  'Lincoln',
  'Bella',
  'Joshua',
  'Lucy',
  'Christopher',
  'Paisley',
  'Andrew',
  'Sophie',
  'Theodore',
  'Genesis',
  'Caleb',
  'Naomi',
  'Ryan',
  'Eliana',
  'Asher',
  'Elena',
  'Nathan',
  'Sarah',
  'Thomas',
  'Audrey',
  'Leo',
  'Brooklyn',
  'Hunter',
  'Leah',
  'Christian',
  'Alexa',
  'Connor',
  'Madelyn',
  'Eli',
  'Aaliyah',
  'Isaiah',
  'Savannah',
  'Henry',
  'Allison',
];

const comments = [
  'Thats huge! Nice job!',
  'WOAH!',
  'LETS GO!!!',
  'Impressive gains! Keep it up!',
  'Your dedication is inspiring.',
  'Hard work paying off! 💪',
  'Goals, goals, goals! You\'re crushing them!',
  'Consistency is key. Well done!',
  'Sweat today, smile tomorrow!',
  'You\'re a beast in the gym!',
  'Looking strong and focused!',
  'Fitness goals unlocked!',
  'Keep pushing yourself. You\'re unstoppable!',
  'Incredible progress!',
  'Your effort is unmatched.',
  'Thats how you do it!',
  'Breaking barriers, one workout at a time.',
  'Pure dedication right there!',
  'Success is earned, not given.',
  'The only bad workout is the one that didn’t happen.',
  'You make it look easy!',
  'Strength and determination in every rep.',
  'Keep shining, superstar!',
  'Youre on fire!',
  'Next level fitness achieved!',
  'Youre a true fitness warrior!',
  'Every drop of sweat is a step closer to success.',
  'Beast mode: ON!',
  'One more rep, one step closer.',
  'Youre building a masterpiece, one rep at a time.',
  'Strength doesn’t come from the body; it comes from the will.',
  'Youre not just working out; youre sculpting a masterpiece.',
  'Your strength knows no limits!',
  'Transforming dreams into gains!',
  'Every drop of sweat is a victory.',
  'The pain you feel today will be the strength you feel tomorrow.',
  'Unleashing the inner athlete!',
  'Success is no accident. Its hard work, perseverance, learning, studying, sacrifice, and most of all, love for what you are doing.',
  'Youre not here to be average; youre here to be awesome.',
  'Winners never quit, and quitters never win.',
  'Stay focused and never give up on your goals.',
  'Your effort today will be your success tomorrow.',
  'Crushing goals and breaking barriers!',
  'Youre not just working out; youre crafting a masterpiece.',
  'The only limit is the one you set yourself.',
  'Strength doesnt come from what you can do; it comes from overcoming the things you once thought you couldn’t.',
  'No excuses, just results!',
  'Your only limit is you.'
];

const workoutPostText = [
  'Just finished an intense workout session. Feeling pumped and energized!',
  'Another day, another opportunity to push my limits at the gym. 💪',
  'Workout complete! Now, time to refuel and recover.',
  'Sweat is just fat crying. Today, there were a lot of tears!',
  'Crushed my fitness goals today. Hard work pays off!',
  'The gym is my therapy, and todays session was a success.',
  'No excuses, just results. Consistency is the key!',
  'Elevating my heart rate and breaking a sweat  the best kind of therapy.',
  'Fitness is not about being better than someone else; its about being better than you used to be.',
  'Focused on progress, not perfection. Each day is a step forward.',
  'Celebrate every small victory on the journey to a healthier, stronger self.',
  'Embracing the burn because I know its building a better me.',
  'Fitness is not a destination; its a journey without a finish line.',
  'Feeling the burn today, but its worth it for the progress tomorrow.',
  'Workout complete, endorphins activated. Ready to conquer the day!',
  'Turning "I cant" into "I can"  one workout at a time.',
  'Strength doesnt come from the body; it comes from the will.',
  'Fueling my body with sweat and determination. #FitnessJourney',
  'The only bad workout is the one that didnt happen. Today, it happened!',
  'Fitness is not just about the body; its a holistic journey for mind and soul.',
  'Todays workout: Because I can. Tomorrows workout: Because I will.',
  'Mindset is everything. Stay positive, work hard, make it happen!',
  'The gym is my happy place. Working on myself, for myself.',
  'Breaking a sweat and breaking barriers. The grind never stops.',
  'Challenging myself today to be a better version tomorrow.',
  'Putting in the work today for a stronger, healthier tomorrow.',
  'Fitness is my lifestyle, and todays workout was on point!',
  'Remembering that the only bad workout is the one that didnt happen.',
  'Transforming dreams into gains. One workout at a time.',
  'Embrace the process, trust the journey. #FitnessMotivation',
  'Todays workout brought to you by determination and a sprinkle of sweat.',
  'Consistency over perfection. Progress over procrastination.',
  'Fitness is not just about the body; its a journey of self-discovery.',
  'Breaking a sweat because I love the feeling of accomplishment.',
  'Celebrate the small victories they lead to big results.',
  'Stay committed to your fitness goals, even on the tough days.',
  'Sweat today, shine tomorrow. #FitnessGoals',
  'Turning the impossible into "Im possible" through fitness.',
  'One more rep, one step closer to my fitness goals.'
];

const gymUsernames = [
  'FitExplorer',
  'IronWarrior',
  'FlexMaster',
  'CardioChamp',
  'MuscleMaven',
  'PowerLifterPro',
  'SweatSculptor',
  'GymGuru',
  'BeastModeBoss',
  'FitFury',
  'IronSculptor',
  'FitnessPhoenix',
  'BodyBlitz',
  'GymJunkie',
  'SweatElite',
  'RippedRonin',
  'IronGladiator',
  'FlexFiesta',
  'GymHercules',
  'CardioCrusader',
  'SquatSultan',
  'LiftLegend',
  'PumpPioneer',
  'GymnasticsGuru',
  'ActiveAlpha',
  'MuscleMaestro',
  'FitPhoenix',
  'FlexFusion',
  'PowerPulse',
  'SweatSymphony',
  'GymVoyager',
  'BodyBlast',
  'GymGazelle',
  'CardioCaptain',
  'SculptureSprint',
  'IronInferno',
  'FitFlare',
  'PulsePioneer',
  'GymGazelle',
  'CardioCommando',
  'BodyBomber',
  'LiftLynx',
  'SweatSamurai',
  'GymGargoyle',
  'FlexFury',
  'IronInsider',
  'FitFlame',
  'SweatSensei'
];

const exercises = [
  {
    name: 'Push-Up',
    type: 'Bodyweight',
    muscle: 'Chest',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Start in a plank position, lower your body by bending your elbows, and then push back up.'
  },
  {
    name: 'Squat',
    type: 'Strength',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Stand with feet shoulder-width apart, lower your hips by bending your knees, and then stand back up.'
  },
  {
    name: 'Bicep Curl',
    type: 'Strength',
    muscle: 'Biceps',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: 'Hold dumbbells in each hand, curl them towards your shoulders, and then lower them back down.'
  },
  {
    name: 'Plank',
    type: 'Core',
    muscle: 'Abdominals',
    equipment: 'None',
    difficulty: 'Intermediate',
    instructions: 'Maintain a straight line from head to heels in a plank position, engaging your core muscles.'
  },
  {
    name: 'Deadlift',
    type: 'Strength',
    muscle: 'Back',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: 'With a barbell in front of you, bend at the hips and knees to lower the barbell, then stand back up.'
  },
  {
    name: 'Lunges',
    type: 'Strength',
    muscle: 'Legs',
    equipment: 'None',
    difficulty: 'Intermediate',
    instructions: 'Step forward with one foot, lower your hips, and then push back to the starting position. Repeat on the other leg.'
  },
  {
    name: 'Mountain Climbers',
    type: 'Cardio',
    muscle: 'Core',
    equipment: 'None',
    difficulty: 'Intermediate',
    instructions: 'In a plank position, alternate bringing your knees towards your chest in a running motion.'
  },
  {
    name: 'Tricep Dips',
    type: 'Strength',
    muscle: 'Triceps',
    equipment: 'Parallel Bars',
    difficulty: 'Intermediate',
    instructions: 'Lower your body between parallel bars by bending your elbows, then push back up.'
  },
  {
    name: 'Burpees',
    type: 'Cardio',
    muscle: 'Full Body',
    equipment: 'None',
    difficulty: 'Advanced',
    instructions: 'Combine a squat, push-up, and jump in one fluid motion.'
  },
  {
    name: 'Pull-Ups',
    type: 'Strength',
    muscle: 'Back',
    equipment: 'Pull-Up Bar',
    difficulty: 'Advanced',
    instructions: 'Hang from a bar with palms facing away, pull your body up until your chin is over the bar.'
  },
  {
    name: 'Russian Twists',
    type: 'Core',
    muscle: 'Obliques',
    equipment: 'None',
    difficulty: 'Intermediate',
    instructions: 'Sit on the floor, lean back slightly, and twist your torso to touch the floor on each side.'
  },
  {
    name: 'Box Jumps',
    type: 'Cardio',
    muscle: 'Legs',
    equipment: 'Box',
    difficulty: 'Intermediate',
    instructions: 'Jump onto a box or platform, landing with both feet, then step back down.'
  },
  {
    name: 'Chest Press',
    type: 'Strength',
    muscle: 'Chest',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: 'Lying on a bench, lower a barbell to your chest, and then push it back up.'
  },
  {
    name: 'Kettlebell Swing',
    type: 'Cardio',
    muscle: 'Full Body',
    equipment: 'Kettlebell',
    difficulty: 'Intermediate',
    instructions: 'Swing a kettlebell between your legs, then drive your hips forward to swing it to shoulder height.'
  },
  {
    name: 'Leg Press',
    type: 'Strength',
    muscle: 'Legs',
    equipment: 'Leg Press Machine',
    difficulty: 'Intermediate',
    instructions: 'Press the platform away with your feet, extending your legs, then bend your knees to bring it back.'
  },
  {
    name: 'Dumbbell Shoulder Press',
    type: 'Strength',
    muscle: 'Shoulders',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: 'Hold dumbbells at shoulder height, then press them overhead, extending your arms.'
  },
  {
    name: 'Hanging Leg Raise',
    type: 'Core',
    muscle: 'Abdominals',
    equipment: 'Pull-Up Bar',
    difficulty: 'Intermediate',
    instructions: 'Hang from a pull-up bar and lift your legs towards your chest, engaging your core muscles.'
  },
  {
    name: 'Seated Cable Row',
    type: 'Strength',
    muscle: 'Back',
    equipment: 'Cable Machine',
    difficulty: 'Intermediate',
    instructions: 'Sit at a cable row machine, grab the handles, and pull them towards you, squeezing your shoulder blades.'
  },
  {
    name: 'Boxing Jab-Cross',
    type: 'Cardio',
    muscle: 'Arms',
    equipment: 'Boxing Gloves',
    difficulty: 'Intermediate',
    instructions: 'Stand in a boxing stance, throw a quick jab with your front hand, followed by a cross with your rear hand.'
  },
  {
    name: 'Reverse Lunges with Dumbbells',
    type: 'Strength',
    muscle: 'Legs',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    instructions: 'Hold dumbbells in each hand, step backward into a lunge, and then return to the starting position.'
  },
];

const workoutNames = [
  'Full Body Blast',
  'Core Crusher',
  'Leg Day Intensity',
  'Upper Body Sculpt',
  'Cardio Inferno',
  'Strength Fusion',
  'Total Body Toning',
  'Endurance Challenge',
  'Power Plyometrics',
  'HIIT Havoc',
  'Flexibility Flow',
  'Circuit Blitz',
  'Tabata Torch',
  'Muscle Mayhem',
  'Agility Agility',
  'Stamina Surge',
  'Balance Builder',
  'Functional Fitness',
  'Bodyweight Burn',
  'Metabolic Meltdown',
];

const workoutDescriptions = [
  'A high-intensity full-body workout designed to target every major muscle group for maximum calorie burn and muscle engagement.',
  'Focus on strengthening your core with dynamic exercises that challenge your abdominal muscles and improve stability.',
  'An intense leg day workout to build strength and endurance in your lower body, incorporating squats, lunges, and more.',
  'Sculpt and tone your upper body with a variety of resistance exercises targeting the arms, shoulders, chest, and back.',
  'Boost your cardiovascular fitness with a high-energy cardio workout that includes dynamic movements to get your heart pumping.',
  'Combine strength training and flexibility exercises in this workout to improve overall muscle tone and range of motion.',
  'Target every muscle group in this total body toning session, using a mix of weights and bodyweight exercises.',
  'Challenge your endurance with a series of exercises designed to push your limits and enhance cardiovascular fitness.',
  'Powerful plyometric exercises to increase explosive strength and agility, incorporating jumps, hops, and quick movements.',
  'High-Intensity Interval Training (HIIT) circuit that alternates between short bursts of intense activity and brief rest periods.',
  'Improve flexibility and release tension with a sequence of stretches and yoga-inspired movements in this flow workout.',
  'A circuit-style workout that moves you through a series of exercises to keep your heart rate up and build strength.',
  'Tabata-style workout with short, intense intervals followed by brief rests to maximize calorie burn and improve fitness.',
  'Intense muscle-focused exercises to create mayhem in your muscles, promoting growth and strength development.',
  'Improve agility and coordination with a workout that incorporates dynamic movements and quick directional changes.',
  'Build stamina and endurance with a challenging workout that gradually increases intensity and duration.',
  'Enhance balance and stability through exercises that engage your core and challenge your proprioception.',
  'Functional fitness routine that mimics everyday movements to improve overall strength and mobility.',
  'Bodyweight-only workout designed to burn calories and build strength using your own body resistance.',
  'Metabolic workout to boost your metabolism and burn calories long after the workout is complete.',
];

const programNames = [
  'Ultimate Strength Challenge',
  'Lean and Mean Transformation',
  'Total Body Shred Program',
  'Functional Fitness Mastery',
  'Cardio Conditioning Intensive',
  'Muscle Builder Bootcamp',
  'Core Power Transformation',
  'Endurance Elite Program',
  'HIIT Revolution',
  'Bodyweight Blitz Challenge',
  'Flexibility Fusion Journey',
  'Metabolic Overhaul Program',
  'Weight Loss Warrior Plan',
  'Athletic Performance Boost',
  'Mindful Movement Program',
];
const mediaUrl = [
  'https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg',
  'https://as1.ftcdn.net/v2/jpg/02/00/87/86/1000_F_200878690_TcNFVjD7FqAR9gADMZrG8ygXQq86oVi7.jpg',
  'https://as1.ftcdn.net/v2/jpg/03/08/72/80/1000_F_308728099_AdWDcjBTazzfGCAvb54HuWmaTmbd9Xi9.jpg',
  'https://t4.ftcdn.net/jpg/01/74/21/25/240_F_174212531_cerVf4uP6vinBWieBB46p2P5xVhnsNSK.jpg',
  'https://t3.ftcdn.net/jpg/00/95/32/40/240_F_95324016_YSrMJOWsBGMbRiUrYL31JNRtxBREPAAo.jpg',
  'https://t3.ftcdn.net/jpg/01/64/71/26/240_F_164712654_z7aFZvAhX0WFJjosS04qcMvjkNcJXtdN.jpg',
  'https://t3.ftcdn.net/jpg/03/14/89/52/240_F_314895284_4Fc8f6bMMtls1iG5vCClOQhYyEzM4xky.jpg',
  'https://t3.ftcdn.net/jpg/02/56/65/32/240_F_256653232_BuwWMqvrv57JD0zbHFJI6dbRngelDLgF.jpg',
  'https://t4.ftcdn.net/jpg/03/09/97/55/240_F_309975507_OZK8uQHIdKUfSOnMqfXX2B8NPFPMrpq5.jpg',
  'https://t4.ftcdn.net/jpg/01/37/40/83/240_F_137408357_CexBRuseaKpSNFoJD2bdj786NuEqfNvi.jpg',
  'https://t3.ftcdn.net/jpg/01/92/95/22/240_F_192952278_Hlkr1A8ekKUVTDsS31tytDEeABcy7lXF.jpg',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXZsYzd3MnhmZnAyeTMzYzlidHdzcmIxd2N2ZmlyM3d1eHFoYTVsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriNZoNvn73MZaFYk/giphy.gif',
  'https://media4.giphy.com/media/3oKHWwyFAfFmIL2iXe/200.webp?cid=ecf05e477xwn33kh585xhqlna0atn6zsgvdkrqmy7mcyx5po&ep=v1_gifs_related&rid=200.webp&ct=g',
  'https://media.tenor.com/PvPV2tY77O0AAAAd/lift-weight-lifting.gif'
]

const programDescriptions = [
  'A comprehensive strength training program designed to push your limits and build ultimate strength in all major muscle groups.',
  'Transform your physique with a program focused on lean muscle development, fat loss, and achieving a toned, athletic look.',
  'Shred body fat and sculpt your entire body with a total body workout program that combines strength training and cardio.',
  'Master functional movements and improve your overall fitness with a program that enhances your everyday physical abilities.',
  'Boost your cardiovascular endurance with an intensive program that challenges your heart and lungs through dynamic exercises.',
  'Build muscle mass and increase strength with a bootcamp-style program that incorporates challenging resistance training.',
  'Transform your core with a program dedicated to strengthening your abdominal muscles and improving core stability.',
  'Enhance your stamina and endurance with a program designed to improve your cardiovascular fitness and aerobic capacity.',
  'Experience the revolution of High-Intensity Interval Training (HIIT) with a program that maximizes calorie burn and fitness gains.',
  'Achieve impressive results using only your bodyweight in this challenging program designed for strength and endurance.',
  'Improve flexibility, mobility, and balance with a fusion program that incorporates yoga-inspired movements and stretches.',
  'Revitalize your metabolism and burn calories with a program designed to boost your metabolic rate and promote fat loss.',
  'Embark on a weight loss journey with a program that combines effective workouts and nutrition strategies for lasting results.',
  'Optimize your athletic performance with a program that hones in on sport-specific training to enhance skills and fitness.',
  'Embrace mindful movement with a program that combines physical exercise with mindfulness practices for holistic well-being.',
];

const workoutChoices = (createdWorkouts) => {
  const number = getRandomNumber();
  const workoutChoices = []
  for (let i = 1; i < number; i++) {
    if (createdWorkouts[i]) {
      workoutChoices.push({
        day: `Day ${i}`,
        workout: createdWorkouts[i]._id
      })
    }
  }
  return workoutChoices
}

const createWorkout = () => {
  const randomWorkoutName = getRandomArrItem(workoutNames)
  const randomWorkoutDescription = getRandomArrItem(workoutDescriptions)
  const workouts = createPhase()
  
  return {
    name: randomWorkoutName,
    description: randomWorkoutDescription,
    workout: workouts
  }
}

const createExercisePhase = () => {
  const exerciseOptions = []
  for (let i = 0; i < 1; i++) {
    const exercise = getRandomArrItem(exercises)
    exerciseOptions.push({
      exercise: exercise,
      sets: [
        { "reps": 5, "weight": 0, "completed": false },
        { "reps": 5, "weight": 0, "completed": false },
        { "reps": 5, "weight": 0, "completed": false },
        { "reps": 5, "weight": 0, "completed": false },
        { "reps": 5, "weight": 0, "completed": false }
      ]
    })    
  }
  return exerciseOptions
}

const createPhase = () => {
  const workouts = []
  const number = getRandomNumber();
  for (let i = 0; i < number; i++) {
    const exerciseOptions = createExercisePhase()
    workouts.push({
      phase: i,
      exercises: exerciseOptions
    })
  }
  return workouts
}


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random number 
const getRandomNumber = () => {
  return Math.floor(Math.random() * 25)
}

// Gets a random full name
const getRandomName = () => {
  const number = getRandomNumber();
  return `${getRandomArrItem(names)}${getRandomArrItem(names)}${number}`;
}

const getRandomUsername = () => {
  const number = getRandomNumber();
  return `${getRandomArrItem(gymUsernames)}${number}`;
}

// Function to generate random assignments that we can add to student object.
const getRandomPosts = () => {
  const int = Math.floor(Math.random() * 6)
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push(getRandomArrItem(workoutPostText)
    );
  }
  return results;
};

const getRandomComment = () => {
  const int = Math.floor(Math.random() * 25)
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push(getRandomArrItem(comments)
    );
  }
  return results;
}

const getRandomMediaURL = () => {
  return getRandomArrItem(mediaUrl);
}

const createUser = () => {
  const number = getRandomNumber()
  const firstName = getRandomName()
  const lastName = getRandomName()
  const username = getRandomUsername()
  const email = `${username}${number}@gmail.com`; 
  return {
    firstName: firstName,
    lastName: lastName,
    username: username, 
    email: email,
    password: "password"
  }
}

const randomProgramDescription = () => {
  return getRandomArrItem(programDescriptions)
}

const randomProgramName = () => {
  return getRandomArrItem(programNames)
} 
// Export the functions for use in seed.js
module.exports = { getRandomMediaURL, randomProgramDescription, randomProgramName, workoutChoices, createWorkout, createUser, getRandomPosts, getRandomComment, getRandomArrItem, getRandomNumber };