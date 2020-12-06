import Swal from "sweetalert2";

function openAlert(messageTrigger) {
  let timerInterval;
  Swal.fire({
    title: messageTrigger.title,
    html: messageTrigger?.html
      ? `<h1 style="color:red;" >${messageTrigger.html}</h1>`
      : "",
    timer: messageTrigger.timer,
    icon: messageTrigger.icon,
    timerProgressBar: true,
    showConfirmButton: false,
    willOpen: () => {
      //  Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

export { openAlert };
