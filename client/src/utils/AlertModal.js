import Swal from "sweetalert2";

function openAlert(messageTrigger) {
  let timerInterval;
  Swal.fire({
    title: messageTrigger.title,
    //html: "I will close in <b></b> milliseconds.",
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
