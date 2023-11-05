class Main {}
Main.main = (args) => {
  let scnr = new Scanner(System.in);
  let additionalTask = false;
  System.out.println('Do you have an additional task? (Y/N)');
  if (scnr.next().toUpperCase().equals('Y')) {
    additionalTask = true;
  } else {
    additionalTask = false;
  }
  while (additionalTask) {
    System.out.println('Please enter a task: ');
    System.out.println('Enter due date: ');
    System.out.println('Do you have an additional task? (Y/N)');
    if (scnr.next().toUpperCase().equals('Y')) {
      additionalTask = true;
    } else {
      additionalTask = false;
    }
  }
}