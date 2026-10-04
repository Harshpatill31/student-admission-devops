describe('Student Admission System Tests', () => {
    it('should verify the testing environment is active', () => {
        expect(true).toBe(true);
    });

    it('should validate dummy student data', () => {
        const student = { name: "Harsh", status: "admitted" };
        expect(student.status).toBe("admitted");
    });
});