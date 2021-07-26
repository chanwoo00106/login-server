"use strict";

const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const form = document.querySelector('.sign-in-form');


form.addEventListener('submit', e => {
    const req = {
        id: id.value,
        pw: pw.value
    };

    fetch("/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            location.href = "/";
        } else {
            alert("로그인 실패");
        }
    }).catch(err => {
        console.error(new Error('에러 발생'));
    });
});