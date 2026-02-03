function validatePassword() {
    const pass = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasi").value;

    if (pass !== konfirmasi) {
        alert("Password dan konfirmasi tidak sama!");
        return false;
    }

    alert("Registrasi berhasil!");
    window.location.href = "halaman_utama.html";
    return false;
}

function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
