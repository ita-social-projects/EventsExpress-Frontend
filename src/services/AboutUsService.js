class AboutUsService {
  getMembers = async () => {
    const members = await fetch(`http://localhost:8000/members`);
    return members.json();
  };
}
export default new AboutUsService();
