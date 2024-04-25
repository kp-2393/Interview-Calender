import { Session } from "next-auth";
import {getServerSession} from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DatePicker from "./components/Calender";
export default async function Home({ user }: Session) {
  const session =  await getServerSession(authOptions)
  return (
    <main>
      {
        session?.user && (
          <DatePicker/>
        )
      }
      {
        !session?.user&& (
          <>
          <div className="flex justify-center align-middle text-center">
          <h1 className="font-bold text-3xl mx-24">Login to view FullStack Institute's interview Calender</h1>
          </div>
          </>
        )
      }
    </main>
  );
}
