import Swal from "sweetalert2";

$('.confirm-destroy').on('click', function (e) {
    e.preventDefault();

    let link = $(this).attr('href');
    let text = getText($(this).attr('data-text'));

    showSweetAlert(text, link);
});

function showSweetAlert(text, link) {
    Swal.fire({
        title: 'Sicherheitsabfrage',
        icon: 'warning',
        text: text,
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: 'Nein',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ja',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.value) {
            window.location.href = link
        }
    });
}

function getText(text) {
    if(text === undefined) {
        return 'Wirklich löschen?';
    } else {
        return text;
    }
}
