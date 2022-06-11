// eslint-disable-next-line import/extensions
import membersMockupData from "../mockup-db/aboutUsMembers.json";

// TODO: after implementing the backend, remove this mockup data
class AboutUsService {
  getMembers = async () => {
    return Promise.resolve(membersMockupData.members);
  };
}
export default new AboutUsService();
