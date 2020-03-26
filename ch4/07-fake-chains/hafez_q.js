
//THREE MAIN SKILLS OF TDD:

// Write good Tests!
// Write them test-first
// Design



//Practices for chains:
//* avoid them: You're breaking demters law
// inteface seggragation princinple (refacroting: adapt parameter)

const myFn = (id) => {
    //test 1: prove your sending an email correctly
   const result = svcApi.sendEmail(id, something, somethingElse); // incoming or outgoing
   // command: mock object (exit point)
   // query:  stub. Incoming dependency.


   //exit point
   // if result is x, return y
   // if result is z, return g
   //test 2 : prove that given an email result, you're returning correct result
   return result.somethingImportant;
};
