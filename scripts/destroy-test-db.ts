const destroyTestDb = async () => {
  const file = Bun.file("test.sqlite");

  // เช็คก่อนว่ามีไฟล์อยู่จริงไหม
  if (await file.exists()) {
    await file.delete();
    console.log("Test database destroyed");
  } else {
    // กรณีไม่มีไฟล์อยู่ ปล่อยผ่านไปเงียบๆ หรือ log แจ้งเตือน
    console.log("Test database does not exist, skipping...");
  }
};

destroyTestDb();
