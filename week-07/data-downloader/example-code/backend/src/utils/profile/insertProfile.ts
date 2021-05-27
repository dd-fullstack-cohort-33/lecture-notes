import {Profile} from '../interfaces/Profile';
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2"

export async function insertProfile(profile: Profile):Promise<boolean> {
	try{
		const mysqlConnection = await connect();
		const mysqlQuery = "INSERT INTO profile(profileId, profileActivationToken, profileAtHandle, profileAvatarUrl, profileEmail, profileHash, profilePhone) VALUES(UUID_TO_BIN(:profileId), :profileActivationToken, :profileAtHandle,:profileAvatarUrl, :profileEmail, :profileHash, :profilePhone) "

		const result =  await <RowDataPacket> mysqlConnection.execute(mysqlQuery, profile)
		await mysqlConnection.release()
		console.log("profile Created Successfully")
		return true
	} catch (error) {
		throw error
	}


}