export const sendMessage = async (req,res) => {
  try {
    
  } catch (error) {
    console.log("Error in send message controller", error.message)
    res.status(500).json({ message: 'Server Error' });
  }
}