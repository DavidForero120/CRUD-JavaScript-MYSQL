const error = document.getElementById('err')
const exito = document.getElementById('exi')
 const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 3000,
timerProgressBar: true,
didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})
if(error != null){
    Toast.fire({
    icon: 'error',
    title: error
    })
}else if(exito != null){
    Toast.fire({
    icon: 'success',
    title: exito
    })
}
