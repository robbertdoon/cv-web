// content of this file is never used - might need it for future implementation

const getSectionData = async (sectionData: string) => {
    const response = await fetch('src/data/' + sectionData + '.json');

    if (!response.ok) {
        const message = `A custom RD error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}

export const runSwitch = (sectionTitle: string, setContent: React.Dispatch<React.SetStateAction<string>>
    ) => {

    const dataPath = async (url: string) => {
        const data = await getSectionData(url);
        // map over all keys in the json object and render it somehow
        setContent(data.html);
    }

    switch (sectionTitle.toLowerCase()) {
        case 'profiel':
            dataPath('profile');
            break;
        case 'cursussen':
            dataPath('courses');
            break;
        case 'opleidingen':
            dataPath('education');
            break;
        default:
            console.log('path does not exist')
    }
}
