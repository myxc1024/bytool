var t=function(t){var e=0;return t.length<6||(/[0-9]/.test(t)&&e++,/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/[\.|~!@#$%^&*()-|_]/.test(t)&&e++),e};export{t as checkPwdStrength};
