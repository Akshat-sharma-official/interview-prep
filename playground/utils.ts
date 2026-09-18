
// word frequency counter
const countWordFrequency = (text: string): Record<string, number> => {
  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 0);

  return words.reduce((frequency, word) => {
    frequency[word] = (frequency[word] ?? 0) + 1;

    return frequency;
  }, {} as Record<string, number>);
};

//Email Extractor
function extractEmail(text: string): string | null {
    let result = text.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);

    if (result !== null) {
        return result[0];
    }

    return null;
}

// Duplicate skill remover
const removeDuplicateSkills = (skills: string[]): string[] => {
    return skills.filter((skill, index) => {
        return skills.indexOf(skill) === index;
    });
};

// Function to check if a skill matches with the Job description
const findMatchingSkills = (
    jobSkills: string[],
    candidateSkills: string[]
): string[] => {
    return candidateSkills.filter((skill) => {
        return jobSkills.includes(skill);
    });
};

// Function to Group skills based on categories
const groupSkillsByCategory = (
    skills: string[]
): Record<string, string[]> => {
    return skills.reduce((groupedSkills, skill) => {

        if (skill === "React" || skill === "TypeScript") {
            if (groupedSkills["frontend"] === undefined) {
                groupedSkills["frontend"] = [];
            }

            groupedSkills["frontend"].push(skill);
        }

        else if (skill === "Node.js" || skill === "MongoDB") {
            if (groupedSkills["backend"] === undefined) {
                groupedSkills["backend"] = [];
            }

            groupedSkills["backend"].push(skill);
        }

        else if (skill === "Python") {
            if (groupedSkills["language"] === undefined) {
                groupedSkills["language"] = [];
            }

            groupedSkills["language"].push(skill);
        }

        return groupedSkills;

    }, {} as Record<string, string[]>);
};

//Function to calculate the percentage of matching skills
const calculateSkillMatch = (
    requiredSkills: string[],
    candidateSkills: string[]
): number => {
    const matchingSkills = requiredSkills.filter((skill) => {
        return candidateSkills.includes(skill);
    });

    return (matchingSkills.length / requiredSkills.length) * 100;
};

//Function to Capitalize a name
const capitalizeName = (name: string): string => {
    const words = name.split(" ");

    const capitalizedWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(" ");
};

//Count characters
const countCharacters = (text: string): number => {
    return text.length;
};

//Sort skills alphabetically
const sortSkills = (skills: string[]): string[] => {
    return skills.sort();
};