export default {
    headers:{
        companyHeader: 'F-LEX',
        signupHeader: 'Sign up with F-LEX'
    },
    formHeaders:{
        personalInfo: 'About you',
    },
    labels:{
      fullName:'Full name',
      contactDetails:'Contact details',
      deleteLanguage: 'Delete Language'
    },
    placeholders:{

    },
    options:{
        locationOptions: [
            { key: 'london', text: 'London', value: 'london' },
            { key: 'manchester', text: 'Manchester', value: 'manchester' },
            { key: 'birmingham', text: 'Birmingham', value: 'birmingham' },
            { key: 'bristol', text: 'Bristol', value: 'bristol' },
            { key: 'cambridge', text: 'Cambridge', value: 'cambridge' },
            { key: 'kent', text: 'Kent', value: 'kent' },
            { key: 'leeds', text: 'Leeds', value: 'leeds' },
            { key: 'liverpool', text: 'Liverpool', value: 'liverpool' },
            { key: 'other', text: 'Other', value: 'other' },
        ],
        referralOptions: [
            { key: 'internet', text: 'Internet Search', value: 'internet' },
            { key: 'social media', text: 'Social Media', value: 'social media' },
            { key: 'newspaper', text: 'Newspaper Article', value: 'newspaper' },
            { key: 'ambassador', text: 'Flex Ambassador', value: 'ambassador' },
            { key: 'university', text: 'University (e.g. Careers Service/Seminar/Campuse Event)', value: 'university' },
            { key: 'friend', text: 'Through a Friend', value: 'friend' },
            { key: 'employer', text: 'Through an Employer', value: 'employer' },
            { key: 'event', text: 'At an Event (e.g. Meetup/Social)', value: 'event' },
            { key: 'other', text: 'Other', value: 'other' },
        ],
        qualificationOptions: [
            {label: 'UK qualified', value: 'UK'},
            {label: 'Foreign qualified', value: 'NonUK'},
            {label: 'No', value: 'None'},
        ],
        workOptions:[
            {label: 'Full Time', value: 'Full Time'},
            {label: 'Part Time', value: 'Part Time'},
        ],
        paralegalOptions: [
            {label: 'Yes', value: 'Yes'},
            {label: 'No', value: 'No'},
        ],
        languageLevelOptions:[
            {label: 'Native Speaker', value: 'native'},
            {label: 'Fluent Speaker', value: 'fluent'},
            {label: 'Business/Degree Level', value: 'business'},
            {label: 'Intermediate', value: 'intermediate'},
        ],
        languageOptions:[
            {label: 'Dutch', value: 'dutch', code:'nl'},
            {label: 'English', value: 'english', code:'gb'},
            {label: 'French', value: 'french', code:'fr'},
            {label: 'Spanish', value: 'spanish', code:'es'},
            {label: 'Russian', value: 'Russian', code:'ru'},
            ]
    },
    showFormElement:{
        showParaLegalQuestionAnswer: 'None'
    }
}