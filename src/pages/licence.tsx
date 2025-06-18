export default function LicenseAgreement() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-700">
      <h1 className="text-4xl font-bold mb-6">Dual License Agreement</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Personal Use - MIT License
      </h2>
      <p className="mb-4">
        <strong>For personal, non-commercial use</strong>, this software is
        licensed under the MIT License:
      </p>

      <p className="mb-4 font-semibold">Copyright © 2025 Ram Prasad.A</p>

      <p className="mb-4">
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>

      <p className="mb-4">
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>

      <p className="mb-4 font-semibold text-red-600">
        RESTRICTION: This MIT license grant applies <strong>ONLY</strong> to
        personal, non-commercial use. Any commercial use requires a separate
        commercial license as described below.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Permitted Personal Uses (Free under MIT)
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal learning and education</li>
        <li>Individual hobby projects</li>
        <li>Academic research (non-commercial)</li>
        <li>Personal portfolio demonstrations</li>
        <li>Open source projects (non-commercial)</li>
        <li>Non-profit community projects</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Commercial License Required
      </h2>
      <p className="mb-4">
        <strong>For any commercial use</strong>, including but not limited to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Integration into commercial products or services</li>
        <li>Use in business operations or commercial environments</li>
        <li>Revenue-generating applications or services</li>
        <li>Professional consulting services using this software</li>
        <li>SaaS applications or platforms</li>
        <li>Enterprise deployments</li>
        <li>
          Any use where the software contributes to generating revenue or
          commercial advantage
        </li>
      </ul>

      <p className="mb-4">
        <strong>A separate commercial license must be obtained</strong> by
        contacting:
      </p>
      <p className="mb-4 font-semibold">
        Freelancer <br />
        Email: <a href="mailto:" className="text-blue-600 underline"></a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
      <p className="mb-2">
        <strong>Commercial Use</strong> means any use of the software that is
        primarily intended for or directed toward commercial advantage or
        monetary compensation, including use by for-profit entities in their
        business operations.
      </p>
      <p className="mb-4">
        <strong>Personal Use</strong> means use by individuals for
        non-commercial, personal purposes only, without any commercial advantage
        or monetary compensation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p className="mb-4 italic">
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  );
}
