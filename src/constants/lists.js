import { collection, getDocs } from 'firebase/firestore';
import { db } from '../api/firebase';

export const getList = async () => {
	let myList = [];
	const querySnapshot = await getDocs(collection(db, 'list'));
	querySnapshot.forEach(doc => {
		if (doc.data().userId == userId) {
			myList.push(doc.data());
		}
	});
	return myList;
};
