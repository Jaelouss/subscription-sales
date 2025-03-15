import axios from 'axios';
import { nanoid } from 'nanoid';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//! Приклад використання
axios
	.get('https://api.example.com/data')
	.then(response => {
		iziToast.success({
			title: 'Успіх',
			message: 'Дані успішно завантажено!',
			position: 'topRight',
		});
	})
	.catch(error => {
		iziToast.error({
			title: 'Помилка',
			message: 'Щось пішло не так...',
			position: 'topRight',
		});
	});

const id = nanoid();
console.log(id);
