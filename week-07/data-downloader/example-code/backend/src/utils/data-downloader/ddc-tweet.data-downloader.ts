import axios from 'axios';
import {Profile} from '../interfaces/Profile';
import { v1 as uuid } from 'uuid';
import {insertProfile} from '../profile/insertProfile';

function ddcTweetDataDownloader() : Promise<any> {
	async function main() {
		try{
			await downloadUsers()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function downloadUsers() {
		try {
			const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
			for (const user of userRequest.data)  {
				const profile : Profile = {profileId: uuid(), profileActivationToken: null, profileAtHandle: user.username, profileAvatarUrl:"http://www.fillmurray.com/150/150", profileEmail: user.email, profileHash: "$argon2id$v=19$m=16,t=2,p=1$ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg$aNXfqwHxbYLiBBtD5lluuwyuy", profilePhone: user.phone }
				await insertProfile(profile)
				const postsRequest = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
				console.log(postsRequest.data)

			}
		} catch (error) {
			throw error
		}
	}
}

ddcTweetDataDownloader().catch(error => {
	console.error(error)
})