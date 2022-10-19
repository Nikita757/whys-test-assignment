const comments = [
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
    { id: 1, author: 'Germán Toro', text: 'Great!', date: '2017-09-11T12:00:39.430Z' },
    { id: 2, author: 'Elena Builes', text: 'Awesome!', date: '2017-09-11T12:30:39.430Z' },
];

const set1 = new Set();
const unique = [];
comments.map((comment) => {
    const oldLen = set1.size;
    set1.add(comment.id);
    if (oldLen !== set1.size) {
        unique.push(comment);
    }
});

console.log(unique);
