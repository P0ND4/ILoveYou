const getSentence = () => {
    const sentences = [];
    return sentences[Math.floor(Math.random() * sentences.length)];
};

export default getSentence;
