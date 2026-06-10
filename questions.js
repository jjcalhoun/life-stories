// Shared question set for the Life Story questionnaire.
// Used by both the respondent wizard and the admin export.
// Each question has a stable `id` — never change these once people start
// submitting, or saved answers won't line up. Add new ones with new ids.

const SECTIONS = [
  {
    id: "about",
    title: "About You",
    subtitle: "Let's start with the basics — who you are and where your story begins.",
    questions: [
      { id: "full_name", text: "What is your full name?", type: "short" },
      { id: "birth", text: "When and where were you born?", type: "short" },
      { id: "live_now", text: "Where do you live now?", type: "short" },
    ],
  },
  {
    id: "roots",
    title: "Family & Roots",
    subtitle: "Your family history and the people who came before you.",
    questions: [
      { id: "ancestry", text: "What do you know about your family's ancestry or heritage?" },
      { id: "parents_grandparents_from", text: "Where did your parents and grandparents come from?" },
      { id: "traditions", text: "What traditions were passed down in your family?" },
      { id: "describe_parents", text: "How would you describe your parents? What did you learn from each of them?" },
      { id: "siblings", text: "Do you have siblings? What was your relationship like growing up?" },
      { id: "faith_upbringing", text: "Was faith or religion part of your upbringing?" },
      { id: "dinner_stories", text: "What family stories were told around the dinner table?" },
      { id: "big_influence", text: "Is there a family member who had an especially big influence on who you became?" },
    ],
  },
  {
    id: "childhood",
    title: "Childhood",
    subtitle: "Your earliest years, the places you called home, and the memories that shaped you.",
    questions: [
      { id: "name_origin", text: "Why were you given your first and middle name?" },
      { id: "nickname", text: "Do you have a nickname and why?" },
      { id: "earliest_memory", text: "What is your earliest memory?" },
      { id: "grew_up", text: "Where did you grow up?" },
      { id: "first_home", text: "What is the first house or home you can remember?" },
      { id: "hometown_shaped", text: "What was your hometown like? How did it shape you?" },
      { id: "main_industry", text: "What was the main industry in your hometown?" },
      { id: "neighborhood_characters", text: "Were there interesting neighborhood characters?" },
      { id: "happy_memory", text: "What is a happy childhood memory?" },
      { id: "difficult_memory", text: "What is a difficult childhood memory?" },
      { id: "wanted_to_be", text: "What did you want to be when you grew up?" },
      { id: "childhood_holidays", text: "Any childhood holidays that stand out?" },
      { id: "summers", text: "How did you spend your summers?" },
      { id: "pets", text: "Did you have any pets growing up?" },
      { id: "child_hobbies", text: "What hobbies did you gravitate towards as a child?" },
      { id: "cherished_memory", text: "What is a childhood memory that you cherish the most?" },
      { id: "family_vacations", text: "Did you go on any family vacations?" },
    ],
  },
  {
    id: "teen",
    title: "Teenage Years",
    subtitle: "High school, friendships, first loves, and early dreams.",
    questions: [
      { id: "highschool_self", text: "How would you describe yourself in high school?" },
      { id: "clubs", text: "Did you join any clubs or activities?" },
      { id: "best_friends", text: "Who were your best friends?" },
      { id: "teen_dreams", text: "What kind of future life did you dream about as a teen?" },
      { id: "first_car", text: "What was your first car?" },
      { id: "favorite_media", text: "Did you have any favorite books, movies, radio, or TV shows?" },
      { id: "met_spouse", text: "When and where did you meet your spouse?" },
      { id: "dates", text: "What would you do when you went on dates?" },
      { id: "advice_teen_self", text: "If you could tell your teenage self something you know now, what would you say?" },
    ],
  },
  {
    id: "young_adult",
    title: "Young Adult",
    subtitle: "Stepping into the world on your own terms.",
    questions: [
      { id: "twenties_self", text: "How would you describe yourself as a 20-something?" },
      { id: "felt_adult", text: "When did you first feel like an adult?" },
      { id: "first_job", text: "What was your first job, and what did you learn from it?" },
      { id: "twenties_life", text: "Where did you live during your 20s, and what was that chapter of life like?" },
    ],
  },
  {
    id: "education",
    title: "Education",
    subtitle: "The schools, teachers, and lessons that helped form who you are.",
    questions: [
      { id: "school_level", text: "How far did you go in school, and where did you attend?" },
      { id: "subjects", text: "What subjects did you love? What did you struggle with?" },
      { id: "teacher_mentor", text: "Who was a teacher or mentor that really impacted you?" },
      { id: "college_training", text: "Did you go to college or pursue any vocational training? What was that experience like?" },
      { id: "education_led", text: "What did your education lead you toward in life?" },
    ],
  },
  {
    id: "career",
    title: "Career",
    subtitle: "Your work, your calling, and what you built over a lifetime.",
    questions: [
      { id: "work_history", text: "What did you do for work throughout your life?" },
      { id: "proudest_accomplishment", text: "What was your proudest professional accomplishment?" },
      { id: "colleague_shaped", text: "Was there a boss, coworker, or colleague who shaped you?" },
      { id: "loved_hated_job", text: "Did you ever have a job you truly loved? One you hated?" },
      { id: "work_family_balance", text: "How did you balance work and family life?" },
      { id: "career_expected", text: "Did your career turn out the way you expected?" },
    ],
  },
  {
    id: "marriage_family",
    title: "Marriage & Building a Family",
    subtitle: "The love story, the wedding, and the beautiful chaos of raising children.",
    questions: [
      { id: "the_one", text: "How did you know your spouse was 'the one'?" },
      { id: "wedding_day", text: "Describe your wedding day." },
      { id: "marriage_secret", text: "What has been the secret to your marriage?" },
      { id: "marriage_hardest", text: "What has been the hardest part of marriage?" },
      { id: "children", text: "What are your children's names and what was each one like as a child?" },
      { id: "joy_raising", text: "What was the greatest joy of raising children?" },
      { id: "parenting_challenge", text: "What was the most challenging part of being a parent?" },
      { id: "values_passed", text: "What values did you most want to pass on to your kids?" },
    ],
  },
  {
    id: "middle_age",
    title: "Middle Age",
    subtitle: "Your 40s and 50s — responsibilities, passions, and growth.",
    questions: [
      { id: "middle_self", text: "How would you describe yourself in your 40s and 50s?" },
      { id: "middle_responsibilities", text: "What were your biggest responsibilities during this time?" },
      { id: "middle_hardships", text: "Did you face any major challenges or hardships?" },
      { id: "middle_passions", text: "Were there passions or interests you pursued during this season?" },
      { id: "middle_accomplishments", text: "What accomplishments are you most proud of from this period?" },
      { id: "middle_important_people", text: "Who were the most important people in your life during your middle years?" },
      { id: "outlook_changed", text: "Did your faith, values, or outlook on life change as you got older?" },
    ],
  },
  {
    id: "grandchildren",
    title: "Grandchildren",
    subtitle: "A whole new chapter of love.",
    questions: [
      { id: "grandkids_arrived", text: "When did grandchildren come into your life, and how did it feel?" },
      { id: "grandkids_names", text: "What are each of your grandchildren's names and what makes each one special?" },
      { id: "grandkids_remember", text: "What do you hope your grandchildren remember about you?" },
      { id: "grandkids_advice", text: "What advice do you most want to pass on to them?" },
      { id: "grandkid_memory", text: "What is a favorite memory with a grandchild?" },
      { id: "grandparent_different", text: "How is being a grandparent different from being a parent?" },
    ],
  },
  {
    id: "retirement",
    title: "Retirement & Later Life",
    subtitle: "The rewards of a life well-lived.",
    questions: [
      { id: "retired", text: "When did you retire, and how did that transition feel?" },
      { id: "retirement_time", text: "What have you done with your time in retirement?" },
      { id: "later_joys", text: "What have been the greatest joys of this season of life?" },
      { id: "wish_done_more", text: "What do you wish you had done more of earlier in life?" },
      { id: "what_matters", text: "How has your sense of what matters most changed over the years?" },
    ],
  },
  {
    id: "wisdom",
    title: "Wisdom & Legacy",
    subtitle: "The lessons of a lifetime — your words to carry forward.",
    questions: [
      { id: "lessons", text: "What are the most important lessons life has taught you?" },
      { id: "believe_deeply", text: "What do you believe in most deeply?" },
      { id: "remembered_for", text: "What do you want to be remembered for?" },
      { id: "left_unsaid", text: "Is there anything you want your family to know — things left unsaid?" },
      { id: "best_advice_received", text: "What is the best piece of advice you ever received?" },
      { id: "best_advice_give", text: "What is the best piece of advice you would give?" },
      { id: "sum_up_life", text: "If you could sum up your life in a few sentences, what would you say?" },
    ],
  },
  {
    id: "your_own",
    title: "In Your Own Words",
    subtitle: "You've answered all of my questions \u2014 now the page is yours. Is there anything else you'd like to share? A memory, a story, a message to your family \u2014 anything at all.",
    openField: true,
    openKey: "own_words",
    questions: [],
  },
];

// Make available to plain <script> includes and any module bundler.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SECTIONS };
}
