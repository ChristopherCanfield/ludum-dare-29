/**
 * BoundingBoxTest.js
 * @author Christopher D. Canfield
 */



test("BoundingBoxTest.intersects", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(1, 3, 4, 3, 1, 3);
	ok(box1.intersects(box2));
});

test("BoundingBoxTest.intersects2", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(2, 1, 3, 2, 2, 1);
	ok(box1.intersects(box2));
});

test("BoundingBoxTest.overlapsX", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(2, 1, 3, 2, 2, 1);
	ok(BoundingBox.overlapsX(box1, box2));
});

test("BoundingBoxTest.overlapsY", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(2, 1, 3, 2, 2, 1);
	ok(BoundingBox.overlapsY(box1, box2));
});

test("BoundingBoxTest.overlapsZ", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(2, 1, 3, 2, 2, 1);
	ok(BoundingBox.overlapsZ(box1, box2));
});

test("BoundingBoxTest.intersectsFalseFromX", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(100, 1, 4, 3, 1, 3);
	ok(!box1.intersects(box2));
});

test("BoundingBoxTest.intersectsFalseFromY", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(1, 1, 100, 3, 1, 3);
	ok(!box1.intersects(box2));
});

test("BoundingBoxTest.intersectsFalseFromZ", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(1, 1, 4, 3, 100, 3);
	ok(!box1.intersects(box2));
});

test("BoundingBoxTest.intersectsFalseFromAll", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	var box2 = new BoundingBox(100, 1, 400, 3, 100, 3);
	ok(!box1.intersects(box2));
});

test("BoundingBoxTest.intersectsExact", function() {
	var box1 = new BoundingBox(1, 3, 4, 3, 1, 3);
	ok(box1.intersects(box1));
});

test("BoundingBoxTest.intersectsFalse", function() {
	var box1 = new BoundingBox(-400, 800, 0, 200, -100, 50);
	var box2 = new BoundingBox(-379.64, 20, 20, 20, 135.22, 20);
	ok(!box1.intersects(box2));
});