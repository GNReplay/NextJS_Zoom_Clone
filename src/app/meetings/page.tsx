import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
    title: "My meeting"
}

export default function page() {
  return <MyMeetingsPage></MyMeetingsPage>
}
