import { SendResponse } from "@/helper/SendResponse";
import { authenticated } from "@/helper/authenticated";
import { Profile } from "@/models/profile";

export async function GET() {
  const { auth, decoded, response } = authenticated();
  if (auth) {
    try {
      // await Profile.updateMany(
      //   {
      //     facebookProfileLink: { $exists: true },
      //     githubProfileLink: { $exists: true },
      //     twitterProfileLink: { $exists: true },
      //     linkedinProfileLink: { $exists: true },
      //   },
      //   [
      //     {
      //       $set: {
      //         socialMedia: {
      //           facebook: "$facebookProfileLink",
      //           github: "$githubProfileLink",
      //           twitter: "$twitterProfileLink",
      //           linkedin: "$linkedinProfileLink",
      //         },
      //       },
      //     },
      //     {
      //       $unset: ["facebookProfileLink", "githubProfileLink", "twitterProfileLink", "linkedinProfileLink"],
      //     },
      //   ],
      //   {
      //     multi: true
      //   }
      // );

      return SendResponse("profile model updated");
    } catch (error) {
      return SendResponse({ message: error.message });
    }
  } else {
    return response;
  }
}
