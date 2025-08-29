export default function About() {
return (
<section className="mx-auto max-w-7xl px-4 py-12">
<h1 className="text-2xl font-bold">About AgroMart</h1>
<p className="mt-3 text-gray-600">
AgroMart is a multi-vendor marketplace connecting farmers and agri vendors.
</p>


<div className="grid md:grid-cols-3 gap-6 mt-8">
<div className="rounded-2xl border p-6">
<h3 className="font-semibold">Our Mission</h3>
<p className="text-gray-600 text-sm mt-2">
Make quality agri-machinery accessible across Bangladesh.
</p>
</div>
<div className="rounded-2xl border p-6">
<h3 className="font-semibold">Our Vision</h3>
<p className="text-gray-600 text-sm mt-2">
Empower small businesses with technology and fair pricing.
</p>
</div>
<div className="rounded-2xl border p-6">
<h3 className="font-semibold">Our Values</h3>
<ul className="text-gray-600 text-sm mt-2 list-disc pl-5">
<li>Trust & transparency</li>
<li>Customer-first</li>
<li>Sustainable growth</li>
</ul>
</div>
</div>
</section>
);
}