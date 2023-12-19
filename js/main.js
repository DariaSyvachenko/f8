//всі кнопки
const days = document.querySelectorAll('.day')
//всі таблиці
const tables = document.querySelectorAll('.table_main')
//перебираємо всі кнопки
for (let i=0; i < days.length;i++){
    //фіксуємо клік по кнопці
    days[i].addEventListener('click', () => {
        //перебираємо всі таблиці,забираємо активність
        for (let u=0; u < tables.length;u++){
            if (tables[u].classList.contains('table_main_active')) {
                tables[u].classList.remove('table_main_active')
                days[u].classList.remove('day_active')
            }
        }
        //даємо активний клас потрібному номеру таблиці
        tables[i].classList.add('table_main_active')
        days[i].classList.add('day_active')
    })
}




//menu hover
let submenu_all = document.querySelectorAll('.submenu')
let submenu_hovered = {}

for(let i=0;i < submenu_all.length;i++) {
    submenu_hovered[i] = false
}
    
function hideSubmenu(submenu, i) {
    submenu_hovered[i] = false
    setTimeout(() => {
        if (submenu_hovered[i] == false) {
            submenu.classList.remove('submenu_active_opacity')

            setTimeout(() => {
                submenu.classList.remove('submenu_active')
            }, 200)
        }

    }, 100)
}

function openSubmenu(submenu, i) {
    submenu_hovered[i] = true
    submenu.classList.add('submenu_active')

    setTimeout(() => {
        submenu.classList.add('submenu_active_opacity')
    }, 50)
}

function open_or_hide_submenu(submenu,i) {
    if (submenu.classList.contains('submenu_active')) {
        hideSubmenu(submenu,i)
        openMenu()
    } else {
        openSubmenu(submenu,i)
    }
}

for(let i=0;i < submenu_all.length;i++) {

    if (window.matchMedia('(min-width: 980px)').matches) {
        //активація при наведенні
    submenu_all[i].addEventListener('mouseover', () => {
        openSubmenu(submenu_all[i],i)
    })
    //деактивація при віведенні
    submenu_all[i].addEventListener('mouseleave', () => {
        hideSubmenu(submenu_all[i], i)
    })


    } else {
        //робота по кліку
        submenu_all[i].addEventListener('click', () => {
        open_or_hide_submenu(submenu_all[i],i)
        })
    }
    
}






//мобільне меню 
const  burger = document.querySelector('.burger')
const hover_menu = document.querySelector('.hover_menu')
const hover_menu_body = document.querySelector('.hover_menu_body')
const hover_menu_bg = document.querySelector('.hover_menu_bg')


function openMenu(){
    if (hover_menu.classList.contains('hover_menu_active')) {
        //менюшка виключається
        hover_menu.classList.remove('hover_menu_active')
        hover_menu_body.style = 'left: -75%;'
        setTimeout(() => {
            hover_menu.style.display = 'none'
        },200);
    }else{
        //менюшка включається
        hover_menu.classList.add('hover_menu_active')
        hover_menu.style.display = 'block'
        setTimeout(() => {
            hover_menu_body.style = 'left: 0;'
        },0);
       
    }
}
burger.addEventListener('click',openMenu )
hover_menu_bg.addEventListener('click',openMenu)




