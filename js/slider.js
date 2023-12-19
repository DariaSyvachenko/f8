function swipeSlider(scroll_zona, left_func, right_func, px) {
    
    //Тач по слайдеру
    scroll_zona.addEventListener('touchstart', handleTouch_Start)
    scroll_zona.addEventListener('touchmove', handleTouch_Move)
    scroll_zona.addEventListener('touchend', () => {

        start_move = false
    })


        let firstTouch = null
        let  secondTouch = null
        let xdiff = null
        let start_move = false 


        function handleTouch_Start(event) {
            firstTouch = event.touches[0]
        }

        function handleTouch_Move(event) {
            secondTouch = event.touches[0]
            xdiff = secondTouch.clientX - firstTouch.clientX
            if (start_move == false) {
               //перевірка мінімального кроку
               if (Math.abs(xdiff) > px) {
                //
                if (xdiff > 0) {
                    left_func()
                } else {
                    right_func()
                }
                start_move = true
              
                }

            }
        }
}



//slider

const wrapper = document.querySelector('.slider_wrapper')
const start_pos = wrapper.offsetLeft
let current_pos = 0
const step = wrapper.children[0].clientWidth + 30

function go_to_slide(slide_num) {
    if(slide_num !=current_pos){
        
        wrapper.children[current_pos].classList.remove('slider_item_active')
        wrapper.children[slide_num].classList.add('slider_item_active')

        wrapper.style.right = step * slide_num - start_pos + 'px'
        current_pos = slide_num
    }
   
}

function go_to_slide_left() {
    if (current_pos > 0) {
        go_to_slide(current_pos - 1)
    }
     

}

function go_to_slide_right() {
    if (current_pos < wrapper.children.length - 1) {
        go_to_slide(current_pos + 1)
    }
    
}

    


function active_slider() {
    for (let i=0;i<wrapper.children.length;i++) {
        wrapper.children[i].addEventListener('click', () => {
            go_to_slide(i)
        })
    }
}

active_slider()


const slider_cont = document.querySelector('.slider_cont ')

swipeSlider(slider_cont,go_to_slide_left.bind(null,),go_to_slide_right.bind(null,),50)

