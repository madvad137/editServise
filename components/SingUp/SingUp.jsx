import Link from "next/link";
import { useState } from "react";
import {useForm} from "react-hook-form"
import axios from 'axios'

let SingUp = () => {

    const { register, formState:{errors}, handleSubmit, reset } = useForm();
    const token='5773288221:AAFk_pK0ZiZaU0fc_wCrnUxJ8cGf1ZLPQVw';
    const chatId ='-1001753709368';
    const uriApi =`https://api.telegram.org/bot${token}/sendMessage`;
    const onSubmit = (data) => {
        let message = `<b>Заявка с сайта</b>\n`;
        message+=`<b>Отправитель: </b> ${data.firstName}\n`
        message+=`<b>Телефон: </b> ${data.phone}\n`;
        message+=`<b>Сообщение: </b> ${data.message}`;
        
        axios.post(uriApi,{
            chat_id: chatId,
            parse_mode:'html',
            text: message
        })
        .then((res) =>{
            alert("Данные успешно отправлены, мы вам перезвоним!")
        })
        .catch((error) =>{
            alert("Произошла ошибка, попробуйте снова!")
        })
        .finally(() =>{
            reset();
        })
        
        
    }
    return(
        <div className="singUp">
            <div className="singUp__inner">
                <div className="singUp__left">
                    <div className="singUp__sale">
                        <h4 className="singUp__sale-title">Скидка 20%</h4>
                        <p className="singUp__sale-text">на работы при предварительной записи</p>
                        <div className="singUp__sale-text">+7 (967) 555-16-16</div>
                    </div>
                    <div className="singUp__bg"></div>
                </div>
                <div className="singUp__right">
                    <h4 className="singUp__right-title">Записаться на ремонт</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="singUp__right-input">
                            <input {...register("firstName",{
                                required:true
                            })}  type="text" placeholder="Введите имя"/>
                            <div className="singUp__right-error">{errors?.firstName && "имя это обязательное поле"}</div>
                        </div>
                        <div className="singUp__right-input">
                            <input {...register('phone',{
                                required:true
                            })} type="text" placeholder="Введите телефон"/>
                            <div className="singUp__right-error">{errors?.phone && "номер это обязательное поле"}</div>
                        </div>
                        <div className="singUp__right-input">
                        <textarea  {...register('message')} id=""  rows="7" placeholder="короткое сообщение"></textarea>
                        </div>
                        <button type="submit" className="singUp__right-btn">Отправить</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp;