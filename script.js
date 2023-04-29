const header = document.querySelector('.header');
const btnFormContacto = document.querySelector('.btn_contacto');
const spinner = document.querySelector('.spinner');
const form_contacto = document.querySelector('.form_contacto');
const switch_mode = document.querySelector('.switch_mode');
const body = document.querySelector('#body_principal');
const boton_modo = document.querySelector('.boton_modo');
const bar_icono = document.querySelector('.bar_icono');
const menu_navegacion_flotante = document.querySelector('.menu_navegacion_flotante');
const enlace_menu_flotante = document.querySelectorAll('.enlace_menu_flotante');

enlace_menu_flotante.forEach((e)=>{
    e.addEventListener('click',()=>{
        menu_navegacion_flotante.classList.add('desactivarBarraNavegacion');
        bar_icono.innerHTML = '<i class="fa-solid fa-bars bar_menu"></i>';
    })
})


bar_icono.addEventListener('click',()=>{
    
    if(menu_navegacion_flotante.classList.contains('desactivarBarraNavegacion')){
        bar_icono.innerHTML = '<i class="fa-solid fa-xmark bar_close"></i>';
        menu_navegacion_flotante.classList.remove('desactivarBarraNavegacion');
        return;
    }
    bar_icono.innerHTML = '<i class="fa-solid fa-bars bar_menu"></i>';
    menu_navegacion_flotante.classList.add('desactivarBarraNavegacion');
})

window.onload = ()=>{
    const modoTema = Number(localStorage.getItem('modoTema'));
    if(modoTema===0){
        if(body.classList.contains('dark')){
            //modo oscuro activo
            body.classList.remove('dark');
            switch_mode.style.color = 'black';
            boton_modo.innerHTML = '';
      }

      return;
    }

    body.classList.add('dark');
    switch_mode.style.color = 'rgb(226, 212, 13)';
    boton_modo.innerHTML = '<i class="fa-solid fa-moon imagen_luna"></i>';

    
}

switch_mode.addEventListener('click',function(e){
    e.preventDefault();
    if(body.classList.contains('dark')){
        switch_mode.style.color = 'black';
        body.classList.remove('dark');
        localStorage.setItem('modoTema','0');
        boton_modo.innerHTML = '';
        return;
    }
    switch_mode.style.color = 'rgb(226, 212, 13)';
    body.classList.add('dark');
    localStorage.setItem('modoTema','1');
    boton_modo.innerHTML = '<i class="fa-solid fa-moon imagen_luna"></i>';
    
})


btnFormContacto.addEventListener('click',function(){
    btnFormContacto.style.display = 'none';
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        agregarMensajeSuceso();
    }, 3000);

    setTimeout(() => {
        btnFormContacto.style.display = 'block';
    }, 5100);
    
})

const agregarMensajeSuceso = ()=>{
    const parrafo = document.createElement('p');
    parrafo.innerHTML = ' <i class="fa-solid fa-check mensaje_suceso"></i> Mensaje enviado correctamente.';
    parrafo.classList.add('mensaje_suceso');
    form_contacto.appendChild(parrafo);
    setTimeout(() => {
        parrafo.remove();
    }, 2000);
}



window.addEventListener('scroll',function(){
    const valorScroll = window.scrollY;
    if(valorScroll>0){
        header.classList.add('header_scroll');
        return;
    }
    header.classList.remove('header_scroll');
})

